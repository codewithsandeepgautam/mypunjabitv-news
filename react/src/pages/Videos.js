import React from "react";
import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuIcon from "@mui/icons-material/Menu";
import rightIcon from "../assets/images/right-icon01.png";
import leftIcon from "../assets/images/left-icon01.png";
import { useLanguage } from "../utils/LanguageContext";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "../style/style.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import SEO from "../components/common/Seo";
import ReactPlayer from 'react-player';
import { FaYoutube } from "react-icons/fa";

const styles = {
  videoItem: {
    width: "25%",
    padding: "0 15px",
    boxSizing: "border-box"
  },
};
const stripHtmlTags = (html) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};
const Videos = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [nav3, setNav3] = useState(null);
  const [playingIndex, setPlayingIndex] = useState(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const slider3Ref = useRef(null);
  const handlePlay = (index) => {
    setPlayingIndex(index);
  }
  const { language, changeLanguage, translate, latestNews } = useLanguage();
  const handleNext = () => {
    if (nav3) {
      nav3.slickNext();
    }
  };
  const handlePrev = () => {
    if (nav3) {
      nav3.slickPrev();
    }
  };
  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
    setNav3(slider3Ref.current);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <SEO title="videos | MyPunjabiTv" description="" />
      <Navbar changeLanguage={changeLanguage} currentLanguage={language} />
      <section>
        <div className="live-news padd features Our-Show section-paddingfix">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <ul className="p-0">
                  <li className="frist_child">
                    <MenuIcon
                      style={{
                        color: "red",
                        marginRight: "10px",
                        marginBottom: "2px",
                      }}
                    />
                    <strong
                      style={{ fontSize: "18px", textTransform: "uppercase" }}
                    >
                      {translate("newsVideosHeadings")}
                    </strong>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="youtube-video-slider position-relative">
                      {/* <Slider ref={sliderRef1} {...settings}> */}
                      <Slider asNavFor={nav3} ref={slider1Ref} arrows={false}>
                        {latestNews.map(
                          (newsItem, index) =>
                            index < 6 && (
                              <div className="slider-responsive"
                                style={{
                                  position: "relative",
                                  width: "100%",
                                  paddingBottom: "56.25%",
                                  overflow: "hidden",
                                }}
                                key={newsItem._id}
                              >
                                <ReactPlayer
                                  url={newsItem.videoUrl}
                                  width="100%"
                                  height="600px"
                                  loop={false}
                                  playbackRate={1}
                                  playing={playingIndex === index}
                                  onPlay={() => handlePlay(index)}
                                  controls={true}
                                  light={newsItem.img}
                                  playIcon={<FaYoutube onClick={() => handlePlay(index)} className="youtube-icon" />}
                                />
                                {/* <img className="w-100" src={thumb1} alt="" /> */}
                              </div>
                            )
                        )}
                      </Slider>
                      <div className="next-pre-btn">
                        <img className="videoimg001" src={leftIcon} alt="" onClick={handleNext} />
                        <img className="videoimg002" src={rightIcon} alt="" onClick={handlePrev} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <Slider asNavFor={nav2} ref={slider3Ref} arrows={false}>
                      {latestNews.map(
                        (newsItem, index) =>
                          index < 6 && (
                            <div className="bottom-caption" key={newsItem._id}>
                              <Link
                                to={`/news/${newsItem.categoryHandle}/${newsItem.handle}`}
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                <h2 className="text-black" onClick={handleLinkClick}>{newsItem.title}</h2>
                                <p className="text-start">
                                  {stripHtmlTags(newsItem.description.substring(0, 550))}
                                  {/* Truncate to 100 characters as an example */}
                                  {/* Display 'Read More' link to navigate to the full news article */}
                                  <span
                                    style={{
                                      color: "#006",
                                      textDecoration: "none", // Remove underline
                                      cursor: "pointer",
                                      // marginLeft: "10px", // Adding some space between the truncated text and the "Read More" link
                                      transition: "color 0.3s", // Smooth color transition on hover
                                    }}
                                    onMouseOver={(e) => {
                                      e.target.style.color = "orange";
                                    }} // Change color on hover
                                    onMouseOut={(e) => {
                                      e.target.style.color = "#006";
                                    }} // Change color back to grey on mouse out
                                  >
                                    <ArrowRightAltIcon fontSize="large" />
                                  </span>
                                </p>
                              </Link>
                            </div>
                          )
                      )}
                    </Slider>
                  </div>

                  <div
                    className="col-sm-6 section-to-hide"
                    style={{ textAlign: "right" }}
                  >
                    <ul className="youtube-videos">
                      {/* <Slider ref={sliderRef2} {...settings}> */}
                      <Slider
                        arrows={false}
                        asNavFor={nav1}
                        ref={slider2Ref}
                        slidesToShow={2}
                        swipeToSlide={true}
                        focusOnSelect={true}
                      >
                        {latestNews.map(
                          (newsItem, index) =>
                            index < 6 && (
                              <div key={newsItem._id} style={styles.videoItem}>
                                {/* <h3>{index + 1}</h3> */}
                                <li>
                                  <div
                                  >
                                    <ReactPlayer
                                      url={newsItem.videoUrl}
                                      width="100%"
                                      height="145px"
                                      loop={false}
                                      playbackRate={1}
                                      playing={playingIndex === index}
                                      onPlay={() => handlePlay(index)}
                                      controls={true}
                                      light={newsItem.img}
                                      playIcon={<FaYoutube onClick={() => handlePlay(index)} className="youtube-icon" />}
                                    />
                                  </div>
                                  <p className="m-2">
                                    {newsItem.title.substring(0, 60)}...
                                  </p>
                                </li>
                              </div>
                            )
                        )}
                      </Slider>
                      <li>
                      </li>
                    </ul>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-sm-6">
                    <span className="cursor-pointer-div">
                      <ReactPlayer
                        url="https://www.youtube.com/embed/8FfZjpZvpB0?si=QhGo3D_NyNgZWnMe"
                        width="100%"
                        height="350px"
                        loop={false}
                        playbackRate={1}
                        playing={playingIndex === 0}
                        onPlay={() => handlePlay(0)}
                        controls={true}
                        light="https://img.youtube.com/vi/8FfZjpZvpB0/sddefault.jpg"
                        playIcon={<FaYoutube onClick={() => handlePlay(0)} className="youtube-icon" />}
                      />
                      <h4 className="py-2">
                        {translate("videoPageContentTitle")}
                      </h4>
                      <p className="py-2 pe-none">
                        {translate("videoPageContentDesc")}
                      </p>
                    </span>
                    <span className="latest-news mb-4">
                      {language === "en" ? "Updated 10:32 AM, December 22, 2024" : "10:32 AM, 22 ਦਸੰਬਰ 2024 ਨੂੰ ਅੱਪਡੇਟ ਕੀਤਾ ਗਿਆ"}
                    </span>
                  </div>
                  <div className="col-sm-6">
                    <div className="row">
                      {latestNews.slice(4, 8).map((news, index) => {
                        return (
                          <div className="col-sm-6" key={index}>
                            <span className="cursor-pointer-div">
                              <ReactPlayer
                                url={news.videoUrl}
                                width="100%"
                                height="145px"
                                loop={false}
                                playbackRate={1}
                                playing={playingIndex === index}
                                onPlay={() => handlePlay(index)}
                                controls={true}
                                light={news.img}
                                playIcon={<FaYoutube onClick={() => handlePlay(index)} className="youtube-icon" />}
                              />
                              <h5 className="py-2">
                                {news?.title}
                              </h5>
                            </span>
                            <span className="latest-news mb-4">
                              {language === "en" ? "Updated 10:32 AM, December 22, 2024" : "10:32 AM, 22 ਦਸੰਬਰ 2024 ਨੂੰ ਅੱਪਡੇਟ ਕੀਤਾ ਗਿਆ"}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <br />
                <div className="news-blog mt-5">
                  <div className="row align-items-center">
                    {latestNews.map(
                      (newsItem, index) =>
                        index >= 1 &&
                        index < 5 && (
                          <>
                            <div className="col-md-5 py-3 " key={newsItem.id}>
                              <ReactPlayer
                                url={newsItem.videoUrl}
                                width="100%"
                                height="252px"
                                loop={false}
                                playbackRate={1}
                                playing={playingIndex === index}
                                onPlay={() => handlePlay(index)}
                                controls={true}
                                light={newsItem.img}
                                playIcon={<FaYoutube onClick={() => handlePlay(index)} className="youtube-icon" />}
                              />
                              {/* </Link> */}
                            </div>
                            <div className="col-md-7 py-3 " key={newsItem.id}>
                              <Link
                                to={`/news/${newsItem.categoryHandle}/${newsItem.handle}`}
                                onClick={handleLinkClick}
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
                                        // marginLeft: "1px",
                                        transition: "color 0.3s",
                                        fontWeight: "500px"
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
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Videos;
