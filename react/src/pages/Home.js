import React from 'react'
import { useEffect } from 'react'

import { useLanguage } from '../utils/LanguageContext'
import Live from '../components/homePageComponents/Live'
import LatestNews from '../components/homePageComponents/LatestNews'
import Navbar from '../components/common/Navbar'
import Logos from '../components/homePageComponents/Logos'
import Footer from '../components/common/Footer'
import BreakingNews from '../components/homePageComponents/BreakingNews'
import NewsVideos from '../components/homePageComponents/NewsVideos'
import SportsNews from '../components/homePageComponents/CategoryNews'
import { useLocation, useNavigate } from 'react-router-dom'
import Categories from '../components/homePageComponents/Categories'
import SEO from '../components/common/Seo'
const Home = () => {
  const { changeLanguage, language } = useLanguage();
  const location = useLocation()
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('scrollTo') === 'live-news-section') {
      const liveNewsSection = document.getElementById('live-news-section');
      if (liveNewsSection) {
        window.scrollTo({
          top: liveNewsSection.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }, [location.search]);
  useEffect(() => {
    const handleScroll = () => {
      const params = new URLSearchParams(location.search);

      if (params.get('scrollTo') === 'live-news-section') {
        navigate('/');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.search, navigate]);

  return (
    <>
      <SEO title='Home | MyPunjabiTv' description='' />
      <Navbar changeLanguage={changeLanguage} currentLanguage={language} />
      <div>
        <Categories />
        <BreakingNews />
        <div id='live-news-section'>
          <Live />
        </div>
        <LatestNews />
        <SportsNews />
        <NewsVideos />
        <Logos />
        <Footer />
      </div>
    </>
  )
}

export default Home
