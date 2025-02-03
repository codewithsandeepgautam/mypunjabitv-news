import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import "../style/style.css";
import axios from "axios";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import "bootstrap/dist/css/bootstrap.min.css";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Link } from "react-router-dom";
import add from "../assets/images/add1.png";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../utils/LanguageContext";
import add2 from "../assets/images/news_card.png";
import Footer from "../components/common/Footer";
import SEO from "../components/common/Seo";

const NewsArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { changeLanguage, language, translate } = useLanguage();
  const [article, setArticle] = useState(null);
  const [prevId, setPrevId] = useState(null);
  const [nextId, setNextId] = useState(null);
  const [handle, setHandle] = useState("");

  const monthsEn = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const monthPu = [
    "ਜਨਵਰੀ",
    "ਫਰਵਰੀ",
    "ਮਾਰਚ",
    "ਅਪ੍ਰੈਲ",
    "ਮਈ",
    "ਜੂਨ",
    "ਜੁਲਾਈ",
    "ਅਗਸਤ",
    "ਸਤੰਬਰ",
    "ਅਕਤੂਬਰ",
    "ਨਵੰਬਰ",
    "ਦਸੰਬਰ",
  ]
  const getNewsById = async (lang, id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/news/getNews/${lang}/${id}`
      );
      setHandle(response.data.current?.handle)
      setArticle(response.data.current);
      setPrevId(response.data.previousId);
      setNextId(response.data.nextId);
    } catch (error) {
      console.log("Error fetching news by ID:", error); 
      navigate("*");
    }
  };
  console.log("handle", handle);
  useEffect(() => {
    getNewsById(language, id);
    // eslint-disable-next-line
  }, [language, id]);
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    const monthNames = language === 'en' ? monthsEn : monthPu
    return `${monthNames[parseInt(month) - 1]}-${day}-${year}`;
  };
  return (
    <div>
      <SEO title="newsarticle | MyPunjabiTv" description="" />
      <Navbar changeLanguage={changeLanguage} currentLanguage={language} />
      <section className="">
        <div className="live-news padd features latest-news blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="blog-card">
                  {article ? (
                    <div className="post-date-ribbon">
                      <div className="corner"></div>
                      {formatDate(article.createdAt)}
                    </div>
                  ) : (
                    "January-1-2024"
                  )}
                  <div className="about-right">
                    <div className="about-img">
                      {article ? (
                        <img
                          src={article.img}
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            width: "100%",
                          }}
                          alt={article.title}
                        />
                      ) : (
                        <h3>Loading...</h3>
                      )}
                    </div>
                  </div>
                  <div className="section-tittle text-start">
                    {article ? <h3>{article.title}</h3> : <h3>Loading...</h3>}
                  </div>
                  {article ? (
                    <p className="about-pera1 " dangerouslySetInnerHTML={{ __html: article.description }}>
                    </p>
                  ) : (
                    <p className="about-pera1"> Loading...</p>
                  )}
                  <div className="PrevNext text-end" onClick={handleLinkClick}>
                    {prevId ? (
                      <Link to={`/news/${article.categoryHandle}/${prevId}`}> {translate("previousbutton")}</Link>
                    ) : (
                      <span style={{ color: "gray", marginRight: "10px" }}>
                        {translate("previousbutton")}
                      </span>
                    )}
                    {nextId ? (
                      <Link to={`/news/${article.categoryHandle}/${nextId}`}>{translate('nextBtn')} </Link>
                    ) : (
                      <span style={{ color: "gray", marginRight: "10px" }}>{translate('nextBtn')} </span>
                    )}
                  </div>
                  <div className="social-medialinks text-start">
                    <h5>{translate('followUs')}</h5>
                    <ul className="my-3">
                      <li>
                        <Link
                          to="https://www.facebook.com/tvmypunjabi"
                          target="_blank"
                        >
                          <FacebookIcon />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://www.instagram.com/mypunjabitv"
                          target="_blank"
                        >
                          <InstagramIcon />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://twitter.com/mypunjabitv"
                          target="_blank"
                        >
                          <TwitterIcon />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://www.youtube.com/@MYPunjabiTV"
                          target="_blank"
                        >
                          <YouTubeIcon />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://in.pinterest.com/mypunjabitv"
                          target="_blank"
                        >
                          {" "}
                          <PinterestIcon />{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <div className="about-author">
                        <div className="media">
                          <img
                            className="align-self-start mr-3 w-20"
                            src={article?.authorImg}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="media-body text-start">
                        <h6>
                          <strong>{translate("newsAuthorName")}</strong>
                        </h6>
                        <p className="text-primary">
                        {article?.author}
                        </p>
                        {article && <p>{article?.about}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="blog-card">
                  <div className="news-poster d-none d-lg-block fixed">
                    <Link to='https://www.theabacus.in/' target="_blank">
                      <img src={add2} alt="" />
                    </Link>
                    <Link to='https://www.skypro.co.in/ ' target="_blank">
                      <img className="mt-5" src={add} alt="" />
                    </Link>
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

export default NewsArticle;
