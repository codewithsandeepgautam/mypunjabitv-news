import React from "react";
import "../style/style.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../utils/LanguageContext";
import { GrFacebookOption } from "react-icons/gr";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import TwitterIcon from "@mui/icons-material/Twitter";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import img from "../assets/images/_RA99161.webp";
import SEO from "../components/common/Seo";
import facebooklogo from "../assets/socialicons/facebook.png";
import instagramlogo from "../assets/socialicons/instagram.png";
import twitterlogo from "../assets/socialicons/twitter.png";
import linkedinlogo from "../assets/socialicons/linkedin.png";
const AboutUs = () => {
  const { changeLanguage, language, translate } = useLanguage();
  return (
    <div>
      <SEO title="About us | MyPunjabi" description="" />
      <Navbar changeLanguage={changeLanguage} currentLanguage={language} />
      <section className="live-news padd features latest-news about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-sm-12 col-lg-8 ">
              <h2 className="mb-3 text-black">{translate("navAbout")}</h2>
              <p style={{ textAlign: 'justify' }}>{translate("aboutContent")}</p>
            </div>
            <div className="col-lg-4 col-sm-10 col-md-12">
              <img className="mt-4"
                style={{
                  border: "4px solid #373737",
                }}
                src={img}
                alt="img"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="py-3 py-md-5 py-xl-8">
        <div class="container">
          <div class="row gy-3 gy-md-4 gy-lg-0">
            <div class="col-12 col-lg-6">
              <div class="bg-style-profilediv">
                <div class="row gy-3 gy-md-0 align-items-md-center">
                  <div class="col-md-5 about_bg_profile_style text-center">
                    <img src={img} alt="img" />
                  </div>
                  <div class="col-md-7">
                    <div class="card-body p-3">
                      <span className="dirictor-div-style">{language === "pu" ? "ਡਾਇਰੈਕਟਰ ਮੀਡੀਆ" : "DIRECTOR MEDIA"}</span>
                      <h2 class="card-title h4 mb-3 pt-2">
                        {language === "pu" ? "ਗੁਰਨੀਤਿਕਾ ਸੰਧੂ" : "GURNITIKA SANDHU"}
                      </h2>
                      <p class="card-text pb-3">
                        {language === "pu" ? "ਸਾਲਾਂ ਦੇ ਤਜ਼ਰਬੇ ਅਤੇ ਡੂੰਘੇ ਉਦਯੋਗਿਕ ਗਿਆਨ ਦੇ ਨਾਲ, ਸਾਡੇ ਕੋਲ ਸਫਲਤਾ ਦਾ ਇੱਕ ਸਾਬਤ ਟਰੈਕ ਰਿਕਾਰਡ ਹੈ ਅਤੇ ਅਸੀਂ ਆਪਣੇ ਆਪ ਨੂੰ ਕਰਵ ਤੋਂ ਅੱਗੇ ਰਹਿਣ ਲਈ ਪ੍ਰੇਰਿਤ ਕਰ ਰਹੇ ਹਾਂ।" : "With years of experience and deep industry knowledge, we have a proven track record of success and are pushing ourselves to stay ahead of the curve."}
                      </p>
                      <div className="social-icons-container">
                        <Link
                          to="https://www.instagram.com/mypunjabitv/"
                          target="_blank" className="social-icons"
                        >
                          {/* <LuInstagram /> */}
                          <img src={instagramlogo} alt="instagram" />
                        </Link>
                        <Link
                          to="https://www.linkedin.com/company/my-punjabi-tv/"
                          target="_blank" className="social-icons"
                        >
                          {/* <FaLinkedinIn /> */}
                          <img src={linkedinlogo} alt="linkedln" />
                        </Link>
                        <Link
                          to="https://twitter.com/mypunjabitv"
                          target="_blank" className="social-icons"
                        >
                          {/* <TwitterIcon /> */}
                          <img src={twitterlogo} alt="twitter" />
                        </Link>
                        <Link
                          to="https://www.facebook.com/tvmypunjabi"
                          target="_blank" className="social-icons"
                        >
                          {/* <GrFacebookOption /> */}
                          <img src={facebooklogo} alt="facebook" />
                        </Link>
                      </div>
                    </div>
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

export default AboutUs;
