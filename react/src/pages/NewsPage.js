import React, { useState } from "react";
import { useLanguage } from "../utils/LanguageContext";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import '../style/style.css';
import { Link } from "react-router-dom";
import SEO from "../components/common/Seo";
import ReactPlayer from 'react-player'
import { FaYoutube } from "react-icons/fa";
const iframeStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
};
const containerStyle = {
  position: "relative",
  paddingBottom: "56.25%",
  paddingTop: "30px",
  height: 0,
  overflow: "hidden",
  width: "100%",
};
const stripHtmlTags = (html) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};
const NewsPage = () => {
  const { changeLanguage, language, latestNews } = useLanguage();
  const [playingIndex, setPlayingIndex] = useState(null);
  const handlePlay = (index) => {
    setPlayingIndex(index);
  }
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <SEO title="newspage | MyPunjabiTv" description="" />
      <Navbar changeLanguage={changeLanguage} currentLanguage={language} />
      <section className="top-news-sec">
        <div className="live-news features latest-news pt-0" >
          <div className="container padd">
            {latestNews.map((newsItem, index) => index === 0 && (
              <div className="row align-items-center" style={{ background: '#ff66004a' }}>
                <div className="col-md-6" key={newsItem.id}>
                  <div className="on-going-news" onClick={handleLinkClick}>
                    <Link to={`/news/${newsItem.categoryHandle}/${newsItem.handle}`} style={{ textDecoration: 'none', color: 'black' }}>
                      <h2 className="mb-1 pb-2 text-start text-black">{newsItem.title}</h2>

                      <p className="text-start">
                        {stripHtmlTags(newsItem.description.substring(0, 400))}
                        <div
                          style={{
                            display: 'inline-block',
                            color: '#006',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            transition: 'color 0.3s',
                          }}
                          onMouseOver={(e) => {
                            e.target.style.color = 'orange';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.color = '#006';
                          }}
                        >
                          <ArrowRightAltIcon fontSize="large" />
                        </div>
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 pe-0 ps-0 order-first order-lg-last">
                  <div className="on-going-video " key={newsItem.id}>
                    <div className="itemsstyle" style={containerStyle}>
                      <ReactPlayer
                        url={newsItem.videoUrl}
                        loop={false}
                        width="100%"
                        // height="320px"
                        playbackRate={1}
                        style={iframeStyle}
                        playing={playingIndex === index}
                        onPlay={() => handlePlay(index)}
                        controls={true}
                        light={newsItem.img}
                        playIcon={<FaYoutube onClick={()=> handlePlay(index)} className="youtube-icon" />}
                      />
                    </div>
                  </div>

                </div>
              </div>
            ))}
            {latestNews.map((newsItem, index) => index === 1 && (
              <div className="row align-items-center" style={{ background: '#ff66004a' }}>
                <div className="col-md-6 ps-0 pe-0 md-order-first">

                  <div className="on-going-video" key={newsItem.id}>
                    <div className='itemsstyle' style={containerStyle}>
                      <ReactPlayer
                        url={newsItem.videoUrl}
                        width="100%"
                        // height="320px"
                        loop={false}
                        playbackRate={1}
                        style={iframeStyle}
                        playing={playingIndex === index}
                        onPlay={() => handlePlay(index)}
                        controls={true}
                        light={newsItem.img}
                        playIcon={<FaYoutube onClick={()=> handlePlay(index)} className="youtube-icon" />}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pe-0 ps-0 " key={newsItem.id}>
                  <div className="on-going-news" onClick={handleLinkClick}>
                    <Link to={`/news/${newsItem.categoryHandle}/${newsItem.handle}`} style={{ textDecoration: 'none', color: 'black' }}>
                      <h2 className="mb-1 pb-2 text-start text-black">{newsItem.title}</h2>
                      <p className="text-start">
                        {stripHtmlTags(newsItem.description.substring(0, 400))}
                        <div
                          style={{
                            display: 'inline-block',
                            color: '#006',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            transition: 'color 0.3s',
                          }}
                          onMouseOver={(e) => {
                            e.target.style.color = 'orange';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.color = '#006';
                          }}
                        >
                          <ArrowRightAltIcon fontSize="large" />
                        </div>
                      </p>
                    </Link>
                  </div>
                </div>

              </div>
            ))}
            {latestNews.map((newsItem, index) => index === 2 && (
              <div className="row align-items-center" style={{ background: '#ff66004a' }}>
                <div className="col-md-6" key={newsItem.id}>
                  <div className="on-going-news" onClick={handleLinkClick}>
                    <Link to={`/news/${newsItem.categoryHandle}/${newsItem.handle}`} style={{ textDecoration: 'none', color: 'black' }}>
                      <h2 className="mb-1 pb-2 text-start text-black">{newsItem.title}</h2>
                      <p className="text-start">
                        {stripHtmlTags(newsItem.description.substring(0, 400))}
                        <div
                          style={{
                            display: 'inline-block',
                            color: '#006',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            transition: 'color 0.3s',
                          }}
                          onMouseOver={(e) => {
                            e.target.style.color = 'orange';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.color = '#006';
                          }}
                        >
                          <ArrowRightAltIcon fontSize="large" />
                        </div>
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 ps-0 pe-0 order-first order-lg-last">
                  <div className="on-going-video" key={newsItem.id}>
                    <div className="itemsstyle" style={containerStyle}>
                      <ReactPlayer
                        url={newsItem.videoUrl}
                        width="100%"
                        // height="320px"
                        loop={false}
                        playbackRate={1}
                        style={iframeStyle}
                        playing={playingIndex === index}
                        onPlay={() => handlePlay(index)}
                        controls={true}
                        light={newsItem.img}
                        playIcon={<FaYoutube onClick={()=> handlePlay(index)} className="youtube-icon" />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="news-blog mt-5">
              <div className="row align-items-center">
                {latestNews.map(
                  (newsItem, index) =>
                    index >= 3 &&
                    (
                      <>
                        <div className="col-md-5 py-3" key={newsItem.id} onClick={handleLinkClick}>
                          <Link
                            to={`/news/${newsItem.categoryHandle}/${newsItem.handle}`}
                            style={{
                              textDecoration: "none",
                              color: "black",
                              className: "newsbox",
                            }}
                          >
                            <img
                              src={newsItem.img}
                              alt=""
                              className="img-fluid img-shadowdiv1"
                              style={{
                                width: "100%",
                                // height: "250px",
                                objectFit: "cover",
                                borderRadius: "4px",
                              }}
                            />
                          </Link>
                        </div>
                        <div className="col-md-7 py-3" key={newsItem.id} onClick={handleLinkClick}>
                          <Link
                            to={`/news/${newsItem.categoryHandle}/${newsItem.handle}`}
                            style={{
                              textDecoration: "none",
                              color: "black",
                            }}
                            className="newsbox-style"
                          >
                            <h3 className="text-start">{newsItem.title}</h3>
                            <div
                              style={{
                                display: "inline-block",
                                marginRight: "10px",
                                verticalAlign: "top",
                              }}
                            >
                              <p className="text-start">
                                {stripHtmlTags(newsItem.description.substring(0, 300))}
                                <div
                                  style={{
                                    display: "inline-block",
                                    color: "#006",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    // marginLeft: "10px",
                                    transition: "color 0.3s",
                                  }}
                                  onMouseOver={(e) => {
                                    e.target.style.color = "orange";
                                  }}
                                  onMouseOut={(e) => {
                                    e.target.style.color = "#006";
                                  }}
                                >
                                  <ArrowRightAltIcon fontSize="large" />
                                </div>
                              </p>
                            </div>
                          </Link>
                        </div>
                      </>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPage;
