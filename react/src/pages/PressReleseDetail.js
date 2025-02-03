import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import img from "../assets/images/bigstory-template-final-2_5.webp";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLanguage } from "../utils/LanguageContext";

function PressReleseDetail() {
    const { id } = useParams();
    const { changeLanguage, language, translate } = useLanguage();
    const [article, setArticle] = useState([]);
    const [prevId, setPrevId] = useState(null);
    const [nextId, setNextId] = useState(null);

    const getNewsById = async (lang, id) => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/news/getNewspress/${lang}/${id}`
            );
            setArticle(response.data.current);
            setPrevId(response.data.previousId);
            setNextId(response.data.nextId);
        } catch (error) {
            console.log("Error fetching news by ID:", error);
        }
    };

    console.log("article", article);

    useEffect(() => {
        // eslint-disable-next-line
        getNewsById(language, id);
    }, [language, id]);

    return (
        <>
            <Navbar changeLanguage={changeLanguage} currentLanguage={language} />
            <section className="padd">
                <div className="container">
                    <div className="row">
                            <div className="col-md-12 Releases">
                               {article && <h1 className="mb-4">{article?.title}</h1>}
                               {article && <img src={article?.img} alt="img" className="w-100" />}
                               {article && <p dangerouslySetInnerHTML={{__html: article.description}}></p>}
                                <h4 className="pt-3">{language === "en" ? "Significance": "ਮਹੱਤਵ"}</h4>
                                {article && <p dangerouslySetInnerHTML={{__html: article.description}}></p>}
                                <h4 className="pt-3">{language === "en" ? "History" : "ਇਤਿਹਾਸ"}</h4>
                               {article && <p dangerouslySetInnerHTML={{__html: article.description}}></p>}
                              {article &&<p className="lead text-end"><b>{language === "en" ? "Published By Admin:" : "ਐਡਮਿਨ ਦੁਆਰਾ ਪ੍ਰਕਾਸ਼ਿਤ:"}</b><span className="text-muted">{article.createdAt}</span></p>}
                            </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default PressReleseDetail;
