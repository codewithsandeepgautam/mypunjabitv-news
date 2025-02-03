import React, { useState } from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Careerimg from "../assets/images/hiring.png";
import hiring from "../assets/images/we-are-hiring.gif";
// import { FaAnglesRight } from "react-icons/fa6";
// import { Link } from "@mui/material";
import ApplicationFrom from "../components/careerPage/applicationFrom";
import { useLanguage } from "../utils/LanguageContext";

const Career = () => {
    const { language, changeLanguage } = useLanguage()
    // const [activeIndex, setActiveIndex] = useState(null);
    // const handleAccordionClick = (index) => {
    //     setActiveIndex(index === activeIndex ? null : index);
    // };
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Navbar changeLanguage={changeLanguage} currentLanguage={language} />
            <section className="padd Investor position-relative">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                            <div className="carrer-section">
                                <h1>{language === "pu" ? "ਅਸੀਂ ਭਰਤੀ ਕਰ ਰਹੇ ਹਾਂ!" : "We are Hiring!"} <img className="hiring-icon" src={hiring} alt="career" /></h1>
                                <p className="pb-3">{language === "pu" ? "ਅਸੀਂ ਇਸ ਸੰਸਾਰ ਨੂੰ ਹਰੇਕ ਲਈ ਇੱਕ ਬਿਹਤਰ ਸਥਾਨ ਬਣਾਉਣ ਲਈ ਨਵੇਂ ਵਿਚਾਰਾਂ ਅਤੇ ਦ੍ਰਿਸ਼ਟੀਕੋਣਾਂ ਨਾਲ ਨਵੀਨਤਾਕਾਰਾਂ ਦੀ ਅਗਲੀ ਪੀੜ੍ਹੀ ਦੀ ਭਾਲ ਵਿੱਚ ਹਾਂ। ਜੇ ਤੁਸੀਂ ਉਨ੍ਹਾਂ ਵਿੱਚੋਂ ਇੱਕ ਹੋ ਜੋ ਜਾਣਦਾ ਹੈ ਕਿ ਕਿਵੇਂ ਕਰਨਾ ਹੈ ਭੀੜ-ਭੜੱਕੇ ਵਾਲੇ ਖੇਤਰ ਵਿੱਚ ਨਵੇਂ ਰਸਤੇ ਬਣਾਓ, ਸਾਡੀ ਕੰਪਨੀ ਤੁਹਾਡੇ ਨਾਲ ਗੱਲ ਕਰਨਾ ਪਸੰਦ ਕਰੇਗੀ।" : "We are on the hunt for the next generation of innovators with new ideas and visions to make this world a better place for everyone. If youre one of those who knows how to carve new paths in a crowded territory, our company would love to talk to you."}</p>
                                <p className="mb-3">
                                    {language === "pu" ? "ਤਾਂ, ਤੁਸੀਂ ਕਿਸ ਦੀ ਉਡੀਕ ਕਰ ਰਹੇ ਹੋ?" : "So, what are you waiting for?"} <br></br>
                                    {language === "pu" ? "ਸਾਡੀ ਸੰਸਥਾ ਦਾ ਹਿੱਸਾ ਬਣਨ ਦਾ ਮੌਕਾ ਲਓ। ਅਸੀਂ ਤੁਹਾਡੇ ਪੱਖ ਤੋਂ ਸੁਣਨਾ ਚਾਹੁੰਦੇ ਹਾਂ।" : "Grab the opportunity to become a part of our organization. We want to hear from your side."}
                                </p>
                                <button className="career-message mb-3" onClick={togglePopup}>{language === "pu" ? "ਆਪਣਾ ਰੈਜ਼ਿਊਮੇ ਭੇਜੋ" : "Send your resume"}</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className="rounded" src={Careerimg} alt="career" />
                        </div>
                    </div>
                    <div className="carrer-section">
                        <h4 className="job-title">{language === "pu" ? "ਵਰਤਮਾਨ" : "Current"}<span className="dark">{language === "pu" ? " ਖੁੱਲ ਰਿਹਾ ਹੈ" : " Opening"}</span> {language === "pu" ? "ਨੌਕਰੀਆਂ" : "Jobs"}</h4>
                        {language === "pu" ? "ਕੋਈ ਨੌਕਰੀਆਂ ਉਪਲਬਧ ਨਹੀਂ ਹਨ।" : "No Jobs available."}
                        <div className="accordion carrierpage pt-4" id="accordionExample">
                            {/* <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className={`accordion-button ${activeIndex === 0 ? '' : 'collapsed'}`} type="button" onClick={() => handleAccordionClick(0)} aria-expanded={activeIndex === 0} aria-controls="collapseOne">
                                        Senior Cameraman Director of Photography/Cinematographer 
                                    </button>
                                </h2>
                                <div id="collapseOne" className={`accordion-collapse collapse ${activeIndex === 0 ? 'show' : ''}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="job-details">
                                            <p><strong>Job Title: </strong>Senior Cameraman Director of Photography/Cinematographer</p>
                                            <p><strong>Location:</strong> B-70, Phase 7, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055</p>
                                            <p><strong>Job Type: </strong>Full Time</p>
                                            <p><strong>Experience:</strong> 2-4 Years</p>
                                            <p><strong>Number of Positions:</strong> 1</p>
                                            <p><strong>Job Description</strong></p>
                                            <p>The senior cameraman plays a crucial role in the visual storytelling process,
                                                translating the director's vision into compelling imagery. They work closely with the director, producers,
                                                and other key personnel to achieve the desired look and feel of the project.</p>
                                            <p><strong>Required Skills and Qualifications:</strong> Bachelors degree in Film Production, Media Studies, or related field.</p>
                                            <p><FaAnglesRight className="righticon-listing" />Visual Arts Degrees in visual arts, such as photography, graphic design.
                                                as they often involve training in visual aesthetics, </p>
                                            <p><FaAnglesRight className="righticon-listing" />communication skills communication skills and the ability to work collaboratively in a team-oriented environment.</p>
                                            <div className="job-apply">
                                                <Link onClick={togglePopup}>Apply Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className={`accordion-button ${activeIndex === 1 ? '' : 'collapsed'}`} type="button" onClick={() => handleAccordionClick(1)} aria-expanded={activeIndex === 1} aria-controls="collapseTwo">
                                        Video Editor
                                    </button>
                                </h2>
                                <div id="collapseTwo" className={`accordion-collapse collapse ${activeIndex === 1 ? 'show' : ''}`} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="job-details">
                                            <p><strong>Job Title: </strong>Video Editor</p>
                                            <p><strong>Location:</strong> B-70, Phase 7, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055</p>
                                            <p><strong>Job Type: </strong>Full Time</p>
                                            <p><strong>Experience:</strong> 2-6 Years</p>
                                            <p><strong>Number of Positions:</strong> 3</p>
                                            <p><strong>Job Description</strong></p>
                                            <p>The senior cameraman plays a crucial role in the visual storytelling process,
                                                translating the director's vision into compelling imagery. They work closely with the director, producers,
                                                and other key personnel to achieve the desired look and feel of the project.</p>
                                            <p><strong>Required Skills and Qualifications:</strong> Bachelors degree in Film Production, Media Studies, or related field.</p>
                                            <p><FaAnglesRight className="righticon-listing" />Visual Arts Degrees in visual arts, such as photography, graphic design.
                                                as they often involve training in visual aesthetics, </p>
                                            <p><FaAnglesRight className="righticon-listing" />communication skills communication skills and the ability to work collaboratively in a team-oriented environment.</p>
                                            <div className="job-apply">
                                                <Link onClick={togglePopup} >Apply Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className={`accordion-button ${activeIndex === 2 ? '' : 'collapsed'}`} type="button" onClick={() => handleAccordionClick(2)} aria-expanded={activeIndex === 2} aria-controls="collapseThree">
                                        Head- Media Operations
                                    </button>
                                </h2>
                                <div id="collapseThree" className={`accordion-collapse collapse ${activeIndex === 2 ? 'show' : ''}`} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="job-details">
                                            <p><strong>Job Title: </strong>Head- Media Operations</p>
                                            <p><strong>Location:</strong> B-70, Phase 7, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055</p>
                                            <p><strong>Job Type: </strong>Full Time</p>
                                            <p><strong>Experience:</strong> 6 Years</p>
                                            <p><strong>Number of Positions:</strong> 3</p>
                                            <p><strong>Job Description</strong></p>
                                            <p>The senior cameraman plays a crucial role in the visual storytelling process,
                                                translating the director's vision into compelling imagery. They work closely with the director, producers,
                                                and other key personnel to achieve the desired look and feel of the project.</p>
                                            <p><strong>Required Skills and Qualifications:</strong> Bachelors degree in Film Production, Media Studies, or related field.</p>
                                            <p><FaAnglesRight className="righticon-listing" />Visual Arts Degrees in visual arts, such as photography, graphic design.
                                                as they often involve training in visual aesthetics, </p>
                                            <p><FaAnglesRight className="righticon-listing" />communication skills communication skills and the ability to work collaboratively in a team-oriented environment.</p>
                                            <div className="job-apply">
                                                <Link onClick={togglePopup}>Apply Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <ApplicationFrom togglePopup={togglePopup} />
                )}
            </section>
            <Footer />
        </>
    );
};

export default Career;
