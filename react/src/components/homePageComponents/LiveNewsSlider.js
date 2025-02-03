import React, { useState, useRef } from "react";
import Slider from "react-slick";
import ReactPlayer from 'react-player';
import { useLanguage } from "../../utils/LanguageContext";
import { FaYoutube } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
function LiveNewsSlider({ liveUrl }) {
  const sliderRef = useRef(null);
  const [playingIndex, setPlayingIndex] = useState(null);
  const { latestNews } = useLanguage();
  const handlePlay = (index) => {
    setPlayingIndex(index);
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 32
        }
      }
    ]
  };
  return (
    <>
      <section className="p-0 section news-slider-section">
        <Slider ref={sliderRef} {...settings}>
          {latestNews.map((live, index) =>
            index > 0 && (
              <div key={index} className="slider1">
                <ReactPlayer
                  url={live.videoUrl}
                  width="100%"
                  height="180px"
                  loop={false}
                  playbackRate={1}
                  playing={playingIndex === index}
                  onPlay={() => handlePlay(index)}
                  controls={true}
                  light={live.img}
                  playIcon={<FaYoutube onClick={() => handlePlay(index)} className="youtube-icon" />}
                />
              </div>
            ))}
        </Slider>
        <div className="sliderbuttonnextpre">
          <button className="" onClick={() => sliderRef.current.slickPrev()}>
            <span className="relative z-10 flex items-center text-[22px] font-semibold"><FaArrowLeft /></span>
          </button>
          <button className="" onClick={() => sliderRef.current.slickNext()}>
            <span className="relative z-10 flex items-center text-[22px] font-semibold"><FaArrowRight /></span>
          </button>
        </div>
      </section>
    </>
  );
};

export default LiveNewsSlider;
