import React, { useEffect, useState } from "react";
import "../../style/style.css";
import axios from "axios";
import { FaYoutube } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLanguage } from "../../utils/LanguageContext";
import MenuIcon from "@mui/icons-material/Menu";
import LiveNewsSlider from "./LiveNewsSlider";
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";

const Live = () => {
  const { translate, latestNews, language } = useLanguage();
  const [liveUrl, setLiveUrl] = useState([])
  const [playingIndex, setPlayingIndex] = useState(null);
  const handlePlay = (index) => {
    setPlayingIndex(index);
  }
  const stripHtmlTags = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };
  const getLiveNews = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/news/getLive`)
      setLiveUrl(response.data)
    } catch (error) {
      console.log("Error fetching Live:", error)
    }
  }
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    getLiveNews()
  }, [])
  return (
    <div>
      <section>
        <div className="live-news padd features">
          <div className="container">
            <div className="row d-flex">
              <div className="col-sm-9">
                <ul className="p-0">
                  <li className="frist_child">
                    <MenuIcon style={{ color: "red", marginRight: "10px", marginBottom: '2px' }} />
                    <strong style={{ fontSize: '18px', textTransform: 'uppercase' }}>
                      {translate("liveHeading")}
                    </strong>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="box">
                      <div className="responsive-iframe-container">
                        <ReactPlayer
                          url={liveUrl[0]?.videoUrl}
                          width="100%"
                          loop={false}
                          playbackRate={1}
                          playing={playingIndex === 0}
                          onPlay={() => handlePlay(0)}
                          controls={true}
                          playIcon={<FaYoutube onClick={() => handlePlay(0)} className="youtube-icon" />}
                        />
                      </div>
                    </div>
                  </div>
                  <LiveNewsSlider liveUrl={liveUrl} />
                </div>
              </div>
              <div className="col-sm-3 lg:pt-4 md:pt-2">
                <div>
                  {latestNews?.slice(0, 3)?.map((item, index) => {
                    return (
                      <div className="rightsideNews my-4">
                        <h4>
                          {item?.title.substring(0, 45)} </h4>
                        <p className="py-2">{stripHtmlTags(item?.description.substring(0, 105))}...</p>
                        <button className="styleBTN" onClick={handleLinkClick}><Link to={`/news/${item.categoryHandle}/${item.handle}`}>{language === "en" ? "Read More" : "ਹੋਰ ਪੜ੍ਹੋ"}</Link></button>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Live;
