import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import weather from "../assets/images/weather.svg";
import weatherbg from "../assets/images/weather-bg.jpg";
import { CiSearch } from "react-icons/ci";
import Loader from '../components/common/Loader';
import { useLanguage } from '../utils/LanguageContext';
import SEO from '../components/common/Seo';

const Weather = () => {
    const { changeLanguage, language } = useLanguage()
    const [weatherData, setWeatherData] = useState(null);
    const [searchData, setSearchData] = useState();
    const [searchInput, setSearchInput] = useState("chandigarh");
    const [loading, setLoading] = useState(true);
    const apiKey = process.env.REACT_APP_APIKEY;

    const handleSearch = () => {
        setSearchInput(searchData);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchInput}&days=7&q=bulk​&lang=${language === "pu" ? "pa" : "en"}`
                );
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
            setLoading(false);
        };
        fetchData();
    }, [apiKey, searchInput, language]);
    console.log("searchinput<<",searchInput);
    return (
        <div>
            <SEO title='Weather' description='' />
            <Navbar changeLanguage={changeLanguage} currentLanguage={language} />
            <div className='py-5' style={{ background: `url(${weatherbg})`, backgroundSize: 'cover' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-5'>
                            <div className="input-group weather-input mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={searchData}
                                    onChange={(e) => setSearchData(e.target.value)}
                                    placeholder={language === "pu" ? "ਖੋਜ......" : "Search ......"}
                                />
                                <div className="input-group-append">
                                    <button className='border-0' onClick={handleSearch}>
                                        <CiSearch className='weather-search' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        {loading ? (
                            <Loader />
                        ) : weatherData ? (
                            weatherData.forecast.forecastday.map((forecast, index) => (
                                <div className='col-sm-4' key={index}>
                                    <div className="weather-wrapper text-start mb-4">
                                        <div className="weather-section position-relative">
                                            <img src={weather} alt="weather icon" />
                                            <div className="weather-cover">
                                                <h4>{new Date(forecast.date).toLocaleDateString('en-US', { weekday: 'long' })}</h4>
                                                <p>{`${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`}</p>
                                                <p>{new Date(forecast.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}</p>
                                                <h2 className='forecastfont'>{forecast?.day?.avgtemp_f && ((forecast.day.avgtemp_f - 32) * 5 / 9).toFixed(1)}°C</h2>
                                                <p>{forecast.day.condition.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No weather data available</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Weather;
