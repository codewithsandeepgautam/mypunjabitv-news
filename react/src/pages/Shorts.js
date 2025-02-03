import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useLanguage } from '../utils/LanguageContext';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { FaYoutube } from "react-icons/fa";

function Shorts() {
    const { changeLanguage, language } = useLanguage();
    const [data, setData] = useState([]);
    const [playingIndex, setPlayingIndex] = useState(null);

    const handlePlay = (index) => {
        setPlayingIndex(index);
    }

    const getShorts = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/shorts/`);
            setData(response?.data);
        } catch (error) {
            console.error('Error fetching shorts', error);
        }
    };

    useEffect(() => {
        getShorts();
    }, []);
    return (
        <div>
            <Navbar changeLanguage={changeLanguage} currentLanguage={language} />
            <section className='padd'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className='mb-3 text-black text-center'>{language === "en" ? "Shorts" : "ਸ਼ਾਰਟਸ"}</h1>
                            <div className="Shorts-video-slider">
                                <ul className="m-auto text-center p-0 w-100">
                                    {data?.map((item, index) => (
                                        <li className="d-inline-block list-unstyled" key={index}>
                                            <ReactPlayer
                                                url={item.videourl}
                                                width="208px"                                                
                                                loop={false}
                                                playbackRate={1}
                                                playing={playingIndex === index}
                                                onPlay={() => handlePlay(index)}
                                                controls={true}
                                                light={item.img}
                                                playIcon={<FaYoutube onClick={() => handlePlay(index)} className="youtube-icon" />}
                                            />
                                            <p className='short-pah'>{language === "en" ? item.title.substr(0, 45) : item.titlePa.substr(0, 45)}...</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Shorts;
