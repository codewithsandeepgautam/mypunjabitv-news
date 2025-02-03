import React from 'react';
import logo from '../../assets/images/logo.png'
import { useEffect, useState } from 'react';
import axios from 'axios';
// import Searchicon from '../../assets/images/search-icon.png'
import "bootstrap/dist/css/bootstrap.min.css";
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import PinterestIcon from '@mui/icons-material/Pinterest';
// import TwitterIcon from '@mui/icons-material/X';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { useLanguage } from '../../utils/LanguageContext';
import SearchBar from './SearchBar';
import facebooklogo from "../../assets/socialicons/facebook.png";
import instagramlogo from "../../assets/socialicons/instagram.png";
import twitterlogo from "../../assets/socialicons/twitter.png";
import youtubelogo from "../../assets/socialicons/youtube.png";
// import pinterestlogo from "../../assets/socialicons/pinterest.png";
import Main from '../../utils/main';
const Navbar = ({ changeLanguage, currentLanguage }) => {
  const { translate, showLiveNews } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [liveWeather, setLiveWeather] = useState([]);
  const liveSectionRef = useRef(null);
  const toggleLanguage = () => {
    if (currentLanguage === 'en') {
      changeLanguage('pu');
    } else {
      changeLanguage('en');
    }
  };
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  }
  const handleLiveNewsClick = () => {
    if (liveSectionRef.current) {
      window.scrollTo({
        top: liveSectionRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
    navigate(`/?scrollTo=live-news-section`);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const getLiveWeather = async () => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_APIKEY}&q=chandigarh`)
      setLiveWeather(response.data)
    } catch (error) {
      console.log("Error fetching Live:", error)
    }
  }
  useEffect(() => {
    getLiveWeather()
  }, [])
  return (
    <header>
      <Main/>
      <div className='top-header'>
        <div className='container-fluid'>
          <div className='header-container'>
            <div className='col-sm-6 text-start'>
              <button
                type="button"
                className={`languagebtn-style my-2 btn btn-${currentLanguage === "en" ? "secondary" : "primary"
                  }`}
                onClick={toggleLanguage}
              >
                {currentLanguage === "en" ? "ਪੰਜਾਬੀ ਵਿੱਚ ਬਦਲੋ" : "Convert to English"}
              </button>
            </div>
            <div className="social-icons-container">
              <Link to="https://www.facebook.com/tvmypunjabi" target='_blank' className="social-icons">
                {/* <FacebookIcon htmlColor='#ff4c00' /> */}
                <img src={facebooklogo} alt="facebook" />
              </Link>
              <Link to="https://www.instagram.com/mypunjabitv/" target='_blank' className="social-icons">
                {/* <InstagramIcon htmlColor='#ff4c00' /> */}
                <img src={instagramlogo} alt="instagram" />
              </Link>
              <Link to="https://www.youtube.com/@MYPunjabiTV" target='_blank' className="social-icons">
                {/* <YouTubeIcon htmlColor='#ff4c00' /> */}
                <img src={youtubelogo} alt="youtube" />
              </Link>
              <Link to="https://twitter.com/mypunjabitv" target='_blank' className="social-icons">
                {/* <TwitterIcon htmlColor='#ff4c00' /> */}
                <img src={twitterlogo} alt="twitter" />
              </Link>
              {/* <Link to="https://in.pinterest.com/mypunjabitv/" target='_blank' className="social-icons"> */}
              {/* <PinterestIcon htmlColor='#ff4c00' /> */}
              {/* <img src={pinterestlogo} alt="pinterest"/>
                  </Link> */}
              <div className='search-bar'>
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-bar d-flex align-items-center justify-content-between">
        <nav className="navbar navbar-expand-lg w-100 py-0">
          <div className="container-fluid px-0">
            <div id="logo">
              <Link className="navbar-brand" to="/" >
                <img src={logo} className="img-fluid" alt="" onClick={handleLinkClick} />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav main-menu me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
             <Link to='/' className={isActive('/')} > {translate('navHome')} </Link>
             </li> */}
                <li className="nav-item">
                  <Link to="/news" className={isActive('/news')} onClick={handleLinkClick}>{translate('navNews')}</Link>
                </li>
                {/* <li className="nav-item">
             <Link to='/shows' className={isActive('/shows')}>{translate('navShows')}</Link>
             </li> */}
                <li className="nav-item">
                  <Link to='/videos' className={isActive('/videos')} onClick={handleLinkClick}>{translate('navVideos')}</Link>
                </li>
                <li className="nav-item">
                  <Link to='/shorts' className={isActive('/shorts')} onClick={handleLinkClick}>{translate('navShorts')}</Link>
                </li>
                <li className="nav-item">
                  <Link to='/about-us' className={isActive('/about-us')} onClick={handleLinkClick}>{translate("navAbout")}</Link>
                </li>
                <li className="nav-item">
                  <Link to='/contact-us' className={isActive('/contact-us')} onClick={handleLinkClick}>{translate("navContact")}</Link>
                </li>
                {/* <li className="nav-item">
               <a className="nav-link" href="#">
                 Contact
               </a>
             </li> */}
              </ul>
              <div className="live-btn-responsive d-flex">
                <div className='weather'>
                  {/* <WiDayRainWind className="weather-icon"/> */}
                  <Link to="/weather">
                    <img className="weather-icon" src={liveWeather?.current?.condition?.icon} alt="weather" />
                    <span className='weather-value'>{liveWeather?.current && ((liveWeather.current.temp_f - 40) * 5 / 9).toFixed(1)}°C</span>
                  </Link>
                </div>
                <button
                  type='button'
                  className="d-block text-nowrap position-relative"
                  id="live-tv-btn"
                  onClick={handleLiveNewsClick}
                >

                  {showLiveNews &&
                    <div className='livenewdiv'>
                      <div class="livenew_animation">
                        <div class="circle--outer"></div>
                        <div class="circle--inner"></div>
                      </div>
                    </div>
                  }
                  {translate("liveNewsBtn")}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
