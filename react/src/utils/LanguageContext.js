import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import en from '../locales/en.json';
import pu from '../locales/pu.json';
import socket from './Socket';
// Create context
const LanguageContext = createContext();
// Language provider component
export const LanguageProvider = ({ children }) => {

  const storedLanguage = sessionStorage.getItem('language') || 'pu';
  const [language, setLanguage] = useState(storedLanguage);
  const [newsWithCategory, setNewsWithCategory] = useState([])
  const [categoryNews, setCategoryNews] = useState([])
  const [latestNews, setLatestNews] = useState([])
  const [latestNewsPress, setLatestNewsPress] = useState([])
  const [liveNews, setLiveNews] = useState(localStorage.getItem('liveNews') || '');
  const [showLiveNews, setShowLiveNews] = useState(false);
  const translate = (key) => {
    const translations = {
      en: en,
      pu: pu,
    };
    return translations[language][key] || key;
  };
  const changeLanguage = (lang) => {
    if (lang !== language) {
      setLanguage(lang);
      localStorage.setItem('language', lang);
    }
  };

  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang && storedLang !== language) {
      setLanguage(storedLang);
    }
  }, [language]);

  const fetchNewsWithCategory = async (lang) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/news/getEverything/${lang}`);
      setNewsWithCategory(response.data)

    } catch (error) {
      console.error('Error fetching news by category:', error);
    }
  };
  const GetCategoryNews = async (lang) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/news/getSearchResults/${lang}`);
      setCategoryNews(response.data)

    } catch (error) {
      console.error('Error fetching news by category:', error);
    }
  };
  const getLatestNews = async (lang) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/news/getnews/${lang}?page=1`,);
      if (Array.isArray(response.data) && response.data.length > 0) {
        setLatestNews(response.data);
      } else {
        setLatestNews([]);
      }
    } catch (error) {
      console.log("Error fetching latest news", error);
    }
  };
  const getLatestNewsPress = async (lang) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/news/getNewspress/${lang}?page=1`,);
      if (Array.isArray(response.data) && response.data.length > 0) {
        setLatestNewsPress(response.data);
      } else {
        setLatestNewsPress([]);
      }
    } catch (error) {
      console.log("Error fetching latest news", error);
    }
  };
  useEffect(() => {
    socket.on('liveNewsAdded', (data) => {
      setLiveNews(data);
      localStorage.setItem('liveNews', data);
      setShowLiveNews(true);
      setTimeout(() => {
        setShowLiveNews(false);
      }, 600000);
    });
    ;
    return () => {
      socket.off('liveNewsAdded');
    };
  }, []);

  useEffect(() => {
    fetchNewsWithCategory(language);
    getLatestNews(language)
    getLatestNewsPress(language)
    GetCategoryNews(language)
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translate, categoryNews, newsWithCategory, latestNews, latestNewsPress, liveNews, showLiveNews }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
