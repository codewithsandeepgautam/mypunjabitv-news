import React from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { useLanguage } from "../utils/LanguageContext";
import { Link } from "react-router-dom";

const NewsReleases = () => {
    const { language, changeLanguage, latestNewsPress } = useLanguage();
     
    return (
        <>
            <Navbar changeLanguage={changeLanguage} currentLanguage={language} />

            <section className="padd NewsReleases">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="mb-3 text-black">News & Press Releases</h2>
                            <ul className="list-group">
                                {latestNewsPress.map((item, index) => (
                                    <li key={index} className="subtitleslevel">
                                     <Link to={`/press-relese-detail/${item.categoryHandle}/${item.handle}`}>{item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="Updated_Releasesnews pt-2 text-end">
                                <b>Updated On :
                                    
                                     20 May, 2024 at 10:55 am</b>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default NewsReleases;
