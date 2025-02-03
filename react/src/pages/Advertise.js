
import React, { useEffect, useState } from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { useLanguage } from "../utils/LanguageContext";
import axios from "axios";
import { FaAnglesRight } from "react-icons/fa6";
import Loader from "../components/common/Loader";
const Advertise = () => {
    const { language, changeLanguage, translate } = useLanguage();
    const [disabled, setDisabled] = useState(false)
    const [formData, setFormData] = useState({
        businessName: "",
        businessType: "",
        email: "",
        address: "",
        message: ""
    })
    const [error, setError] = useState({
        businessName: "",
        businessType: "",
        email: "",
        address: "",
        message: "",
        success: false
    });
    const handleEmailInputChange = (e) => {
        const inputValue = e.target.value;
        const val = inputValue.replace(" ", '');
        setFormData((prevState) => ({ ...prevState, email: val }));
        setError((prevState) => ({ ...prevState, email: false, message: '' }));
    };
    const validateEmail = (email) => {
        const validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return validRegex.test(email);
    };
    const handleMessageInputChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 500) {
            setFormData(prevState => ({ ...prevState, message: inputValue }));
            setError(prevState => ({ ...prevState, message: "" }));
        }
    };

    useEffect(() => {
        if (error.message) {
            let errorMessage = language === "pu" ? "ਖੇਤ ਖਾਲੀ ਨਹੀਂ ਹੋਣੇ ਚਾਹੀਦੇ!" : "Fields must not be empty!"
            setError(prevState => ({ ...prevState, message: errorMessage }))
        }
    }, [language, error.message])

    const submissionHandler = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError(prevState => ({ ...prevState, message: "" }));
        if (!formData.businessName || !formData.businessType || !formData.address || !formData.email || !formData.message) {
            const errorMessage = language === "pu" ? "ਖੇਤ ਖਾਲੀ ਨਹੀਂ ਹੋਣੇ ਚਾਹੀਦੇ!" : "Fields must not be empty!";
            setError(prevState => ({ ...prevState, success: false, message: errorMessage }))
            setDisabled(false)
            return
        }
        if (!validateEmail(formData.email)) {
            const emailError = language === 'pu' ? "ਈਮੇਲ ਅਵੈਧ ਹੈ!" : "Email is invalid!"
            setError(prevState => ({ ...prevState, email: emailError }));
            setDisabled(false);
            return;
        }
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/advertise`, formData)
            setFormData({
                businessName: '',
                businessType: '',
                address: '',
                email: '',
                message: ''
            })
            setError(prevState => ({ ...prevState, success: true }));

        } catch (error) {
            const serverError = language === "pu" ? "ਕੁਝ ਗਲਤ ਹੋ ਗਿਆ. ਬਾਅਦ ਵਿੱਚ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ!" : "Something went wrong. Try again later!"
            setError(prevState => ({ ...prevState, message: serverError }));
        } finally {
            setDisabled(false)
        }
    }
    useEffect(() => {
        if (error.success) {
            const timer = setTimeout(() => {
                setFormData((prevState) => ({
                    ...prevState,
                    businessName: '',
                    businessType: '',
                    address: '',
                    email: '',
                    message: ''

                }))
                setError((prevState) => ({ ...prevState, success: false }))
                setDisabled(false)
            }, 6000)
            return () => clearTimeout(timer)
        }
    }, [error.success])

    return (
        <>
            <Navbar changeLanguage={changeLanguage} currentLanguage={language} />
            <section className="padd advertise">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1>{translate("advertiseHeading1")}</h1>

                            <p className="py-3">{translate("advertiseContent1")}

                            </p>
                            <h3 className="pb-2">{translate("advertiseHeading2")}</h3>
                            <ul className="audience-content pb-3">
                                <li><FaAnglesRight className="righticon-listing" />{translate("advertiseContent2.1")}</li>
                                <li><FaAnglesRight className="righticon-listing" />{translate("advertiseContent2.2")}</li>
                                <li><FaAnglesRight className="righticon-listing" />{translate("advertiseContent2.3")}</li>
                                <li><FaAnglesRight className="righticon-listing" />{translate("advertiseContent2.4")}</li>
                            </ul>
                            <h4 className="pb-3">{translate('advertiseHeading3')}</h4>
                            <p className="pb-3">{language === "pu" ? "ਅਸੀਂ ਤੁਹਾਡੇ ਸੰਦੇਸ਼ ਨੂੰ ਸਹੀ ਸਮੇਂ 'ਤੇ ਸਹੀ ਦਰਸ਼ਕਾਂ ਤੱਕ ਪਹੁੰਚਾਉਣ ਲਈ ਇਸ਼ਤਿਹਾਰਬਾਜ਼ੀ ਅਤੇ ਡਿਜੀਟਲ ਹੱਲਾਂ ਦੀ ਇੱਕ ਵਿਸ਼ਾਲ ਕਿਸਮ ਦੀ ਪੇਸ਼ਕਸ਼ ਕਰਦੇ ਹਾਂ। ਪੁੱਛਗਿੱਛ ਲਈ, ਕਿਰਪਾ ਕਰਕੇ ਸੰਪਰਕ ਕਰੋ" : "We offer a wide variety of advertising and digital solutions to highlight your message to the right audience at the right time. For inquiries, please contact"}</p>
                            <p>Email: <a className='emailcolorchange' href="mailto:helpdeskmypunjabitv@gmail.com">helpdeskmypunjabitv@gmail.com</a></p>
                        </div>
                        <div className="col-md-4">
                            {error.success ? (
                                <div className="thanks-message-sett w-full flex flex-col justify-between lg:mb-0 p-0 lg:p-5 border rounded-lg text-center">
                                    <div>
                                        <h2>{translate("thankyou")}</h2>
                                        <p className='text-2xl text-success font-weight-bold'>{translate("thankYouLine1")}</p>
                                        <div className='d-flex justify-content-center'>
                                        </div>
                                    </div>
                                    <p className='text-lg font-weight-bold'>{translate("thankYouLine2")}</p>
                                </div>
                            ) : (
                                disabled ? (
                                    <Loader />
                                ) : (
                                    <div className="card">
                                        <div className="card-body">
                                            <h3>{language === "pu" ? "ਸਾਡੇ ਨਾਲ ਇਸ਼ਤਿਹਾਰ ਦਿਓ" : "Advertise with Us"}</h3>
                                            {error.message && (
                                                <span className="error">{error.message}</span>
                                            )}
                                            <form className="mt-2" onSubmit={submissionHandler}>
                                                <div className="mb-2">
                                                    <label for="name" className="form-label">{language === "pu" ? "ਵਪਾਰ ਨਾਮ" : "Business Name"}</label>
                                                    <input type="text" className="form-control" id="name" placeholder={language === "pu" ? "ਵਆਪਣੇ ਕਾਰੋਬਾਰ ਦਾ ਨਾਮ ਦਰਜ ਕਰੋ" : "Enter your business name"} value={formData.businessName}
                                                        onChange={(e) => {
                                                            setFormData(prevState => ({ ...prevState, businessName: e.target.value }));
                                                        }}
                                                    />
                                                    {error.businessName && (
                                                        <span className="error">{error.businessName}</span>
                                                    )}
                                                </div>
                                                <div className="mb-2">
                                                    <label for="type" className="form-label">{language === "pu" ? "ਕਾਰੋਬਾਰ ਦੀ ਕਿਸਮ" : "Business Type"}</label>
                                                    <input type="text" className="form-control" placeholder={language === "pu" ? "ਆਪਣੇ ਕਾਰੋਬਾਰ ਦੀ ਕਿਸਮ ਦਾਖਲ ਕਰੋ" : "Enter your business type"} value={formData.businessType}
                                                        onChange={(e) => {
                                                            setFormData(prevState => ({ ...prevState, businessType: e.target.value }));
                                                        }} />
                                                    {error.businessType && (
                                                        <span className="error">{error.businessType}</span>
                                                    )}
                                                </div>
                                                <div className="mb-2">
                                                    <label for="email" className="form-label">{language === "pu" ? "ਈ - ਮੇਲ" : "Email"}</label>
                                                    <input type="text" className="form-control" id="email" placeholder={language === "pu" ? "ਆਪਣਾ ਈ - ਮੇਲ ਭਰੋ" : "Enter your email"} value={formData.email}
                                                        onChange={(e) => handleEmailInputChange(e)} />
                                                    {error.email && (
                                                        <span className="error">{error.email}</span>
                                                    )}
                                                </div>
                                                <div className="mb-2">
                                                    <label for="Address" className="form-label">{language === "pu" ? "ਪਤਾ" : "Address"}</label>
                                                    <input type="text" className="form-control" id="name" placeholder={language === "pu" ? "ਆਪਣੇ ਦਫਤਰ ਦਾ ਪਤਾ ਦਰਜ ਕਰੋ" : "Enter your office address"} value={formData.address}
                                                        onChange={(e) => {
                                                            setFormData(prevState => ({ ...prevState, address: e.target.value }))
                                                        }}
                                                    />
                                                    {error.address && (
                                                        <span className="error">{error.address}</span>
                                                    )}
                                                </div>
                                                <div className="mb-2">
                                                    <label for="message" className="form-label">{language === "pu" ? "ਸੁਨੇਹਾ" : "Message"}</label>
                                                    <textarea className="form-control" id="message" rows="5" placeholder={language === "pu" ? "ਆਪਣਾ ਸੁਨੇਹਾ ਦਾਖਲ ਕਰੋ" : "Enter your message"} onChange={(e) => handleMessageInputChange(e)} value={formData.message} style={{ resize: 'none' }}></textarea>
                                                </div>
                                                <button type="submit" className="submitbtn-bgchanged">{language === "pu" ? "ਜਮ੍ਹਾਂ ਕਰੋ" : "Submit"}</button>
                                            </form>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Advertise;

