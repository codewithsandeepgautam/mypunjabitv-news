import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Loader from '../common/Loader'
import { useLanguage } from '../../utils/LanguageContext'
import { IoMdClose } from "react-icons/io";

const ApplicationFrom = ({ togglePopup }) => {
    const { language, translate } = useLanguage();
    const [fileName, setFileName] = useState('');
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        location: "",
        jobRole: '',
        experience: "",
        file: ""
    })
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        location: "",
        jobRole: '',
        experience: "",
        file: "",
        message: "",
        success: false
    })
    const handleEmailInputChange = (e) => {
        const inputValue = e.target.value
        const val = inputValue.replace(" ", "")
        setFormData((prevState) => ({ ...prevState, email: val }))
        setError((prevState) => ({ ...prevState, email: false, message: "" }))
    }
    const fullNameHandler = (e) => {
        const inputValue = e.target.value;
        const validValue = inputValue.replace(/[^A-Za-z\s]/g, '');
        if (validValue.length <= 64) {
            setFormData(prevState => ({ ...prevState, fullName: validValue }));
            setError(prevState => ({ ...prevState, message: "" }));
        }
    };
    const validateEmail = (email) => {
        const validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return validRegex.test(email);
    };
    const handlePhoneInputChange = (e) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/\D/g, ''); // Remove non-digit characters

        if (numericValue.length <= 10) {
            setFormData((prevState) => ({ ...prevState, phoneNumber: numericValue }));
            setError((prevState) => ({ ...prevState, phoneNumber: false, message: '' }));
        }
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            setFormData(prevState => ({ ...prevState, file }));
        } else {
            setFileName('');
        }
    };

    useEffect(() => {
        if (error.message) {
            let errorMessage = language === "pu" ? "ਖੇਤ ਖਾਲੀ ਨਹੀਂ ਹੋਣੇ ਚਾਹੀਦੇ!" : "Fields must not be empty!"
            setError(prevState => ({ ...prevState, message: errorMessage }))
        }
    }, [language, error.message])

    const submissionHandler = async (e) => {
        e.preventDefault()
        setDisabled(true)
        setError(prevState => ({ ...prevState, message: "" }))
        if (!formData.email || !formData.experience || !formData.fullName || !formData.jobRole || !formData.location || !formData.phoneNumber || !formData.file) {
            const errorMessage = language === "pu" ? "ਖੇਤ ਖਾਲੀ ਨਹੀਂ ਹੋਣੇ ਚਾਹੀਦੇ!" : "Fields must not be empty!"
            setError(prevState => ({ ...prevState, success: false, message: errorMessage }))
            setDisabled(false)
            return
        }
        if (!validateEmail(formData.email)) {
            const emailError = language === 'pu' ? "ਈਮੇਲ ਅਵੈਧ ਹੈ!" : "Email is invalid!"
            setError(prevState => ({ ...prevState, email: emailError }))
            setDisabled(false)
            return
        }
        const formDataToSend = new FormData()
        formDataToSend.append("fullName", formData.fullName)
        formDataToSend.append("email", formData.email)
        formDataToSend.append("experience", formData.experience)
        formDataToSend.append("location", formData.location)
        formDataToSend.append("phoneNumber", formData.phoneNumber)
        formDataToSend.append("jobTitle", formData.jobRole)
        formDataToSend.append("file", formData.file)
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/career/`, formDataToSend)
            setFormData({
                fullName: "",
                location: "",
                experience: "",
                jobRole: "",
                phoneNumber: "",
                file: "",
                email: "",
            })
            setFileName('');
            toast.success(language === "en" ? "Form submitted" : "ਫਾਰਮ ਜਮ੍ਹਾਂ ਕਰਾਇਆ ਗਿਆ");
        } catch (error) {
            console.log("Error sending message:", error)
            const serverError = language === "pu" ? "ਕੁਝ ਗਲਤ ਹੋ ਗਿਆ. ਬਾਅਦ ਵਿੱਚ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ!" : "Something went wrong. Try again later!"
            setError(prevState => ({ ...prevState, message: serverError }));
        }
        finally {
            setDisabled(false)
            // togglePopup()
        }
    }
    useEffect(() => {
        if (error.success) {
            const timer = setTimeout(() => {
                setFormData((prevState) => ({
                    ...prevState,
                    fullName: "",
                    file: "",
                    email: "",
                    jobRole: "",
                    location: "",
                    experience: "",
                    phoneNumber: ""
                }))
                setError((prevState) => ({ ...prevState, success: false }))
                setDisabled(false)
            }, 10000)
            return () => clearTimeout(timer)
        }
    }, [error.success])
    return (
        <div className="application-job-form">
            {error.success ? (
                <div className="thanks-message-sett w-full flex flex-col justify-between mb-5 lg:mb-0 p-0 lg:p-5 border rounded-lg text-center">
                    <div>
                        <h2>{translate("thankyou")}</h2>
                        <p className='text-2xl text-success font-weight-bold'>{translate("thankYouLine1")}</p>
                        <div className='d-flex justify-content-center'>
                            {/* <FaCheckCircle color='#008000' className='text-5xl md:text-7xl' /> */}
                        </div>
                    </div>
                    <p className='text-lg font-weight-bold'>{translate("thankYouLine2")}</p>
                </div>

            ) : (
                disabled ? (
                    <Loader />
                ) : (
                    <form className="job-apply-form carrer-section" method='post' encType='multipart/form-data'>
                        <h4 className="formheading-detail">{language === "pu" ? "ਆਪਣੇ ਵੇਰਵੇ ਦਰਜ ਕਰੋ" : "Enter Your Details"}</h4>
                        {error.message && (
                            <span className="error">{error.message}</span>
                        )}
                        <div className="inputwith">
                            <label for="fullName" className="form-label position-relative">{language === "pu" ? "ਪੂਰਾ ਨਾਂਮ" : "Full Name"}<span className='starstyle'>*</span></label>
                            <input type="text" className="form-control" id="fullName" placeholder={language === "pu" ? "ਪੂਰਾ ਨਾਮ ਦਰਜ ਕਰੋ" : "Enter Full Name"} value={formData.fullName}
                                onChange={fullNameHandler} />
                        </div>
                        <div className="inputwith">
                            <label for="email" className="form-label position-relative">{language === "pu" ? "ਈਮੇਲ ਪਤਾ" : "Email Address"}<span className='starstyle'>*</span></label>
                            <input type="email" className="form-control" id="email" placeholder={language === "pu" ? "ਆਪਣਾ ਈਮੇਲ ਭਰੋ" : "Enter your Email"} value={formData.email} onChange={handleEmailInputChange} />
                            {error.email && (
                                <span className="error"> {error.email}</span>
                            )}
                        </div>
                        <div className="inputwith">
                            <label for="phone" className="form-label position-relative">{language === "pu" ? "ਫੋਨ ਨੰਬਰ" : "Phone Number"}<span className='starstyle'>*</span></label>
                            <input type="tel" className="form-control" id="phone" placeholder={language === "pu" ? "ਆਪਣਾ ਫ਼ੋਨ ਨੰਬਰ ਦਾਖਲ ਕਰੋ" : "Enter your Phone Number"} value={formData.phoneNumber} onChange={handlePhoneInputChange} />
                        </div>
                        <div className="inputwith">
                            <label for="text" className="form-label position-relative">{language === "pu" ? "ਟਿਕਾਣਾ" : "Location"}<span className='starstyle'>*</span></label>
                            <input type="text" className="form-control" id="Location" disabled={disabled} placeholder={language === "pu" ? "ਉਹ ਸ਼ਹਿਰ ਦਾਖਲ ਕਰੋ ਜਿਸ ਵਿੱਚ ਤੁਸੀਂ ਸਥਿਤ ਹੋ" : "Enter the City you are located in"} value={formData.location}
                                onChange={(e) => {
                                    setFormData(prevState => ({ ...prevState, location: e.target.value }))
                                }} />
                        </div>
                        <div className="inputwith">
                            <label for="text" className="form-label position-relative">{language === "pu" ? "ਨੌਕਰੀ ਦੀ ਭੂਮਿਕਾ" : "Job Role"}<span className='starstyle'>*</span></label>
                            <select className='form-control' value={formData.jobRole} disabled={disabled} onChange={(e) => {
                                setFormData(prevState => ({ ...prevState, jobRole: e.target.value }))
                            }}>
                                <option disabled selected value=''>{language === "pu" ? "ਨੌਕਰੀ ਦੀ ਭੂਮਿਕਾ ਚੁਣੋ" : "select a Job Role"}</option>
                                {language === "pu" ? (
                                    jobsPa.map((item, index) => (
                                        <option key={index} value={item.jobRole} >
                                            {item}
                                        </option>
                                    ))
                                ) : (
                                    jobs.map((item, index) => (
                                        <option key={index} value={item.jobRole} >
                                            {item}
                                        </option>
                                    )))
                                }
                            </select>
                        </div>
                        <div className="inputwith">
                            <label for="text" className="form-label position-relative">{language === "pu" ? "ਅਨੁਭਵ" : "Experience"}<span className='starstyle'>*</span></label>
                            <input type="text" className="form-control" id="Experience" disabled={disabled} placeholder={language === "pu" ? "ਸਾਲਾਂ ਵਿੱਚ ਆਪਣਾ ਨੌਕਰੀ ਦਾ ਤਜਰਬਾ ਦਰਜ ਕਰੋ" : "Enter your Job Experience in Years"} value={formData.experience}
                                onChange={(e) => {
                                    setFormData(prevState => ({ ...prevState, experience: e.target.value }))
                                }} />
                        </div>
                        <div className="inputwith" style={{ width: "full" }}>
                            <label for="resume" className="form-label position-relative">{language === "pu" ? "ਅਪਲੋਡ ਰੈਜ਼ਿਊਮੇ" : "Upload Resume"}<span className='starstyle'>*</span></label>
                            <div className='uploadfile position-relative'>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="resume"
                                    disabled={disabled}
                                    onChange={handleFileChange}
                                    accept=".pdf"
                                />
                                <span className='upload-cv'>
                                    {fileName || (language === "pu" ? "ਕੋਈ ਫ਼ਾਈਲ ਨਹੀਂ ਚੁਣੀ ਗਈ" : "No File chosen")}
                                </span>
                            </div>
                        </div>
                        <div className="text-center mt-4 mb-3">
                            <button className='career-message' type='submit' onClick={submissionHandler} >{language === "pu" ? "ਅਰਜ਼ੀ ਦਿਓ" : "Apply Now"}</button>
                        </div>
                        <IoMdClose className="closeIcon" onClick={togglePopup} />
                    </form>
                ))}
            <ToastContainer />

        </div>
    )
}

const jobs = ["Senior Producer", "Anchor cum Producer", "Correspondent", "Video Editor", "Video Editor", "Graphic Designer", "Production Executive", "Senior Cameraman", "Cameraman", "Video Editor", "Assistant Editor", "Programme Producer", "PCR and VMIX Operator", "Anchor Cum Producer", "Production Coordinator", "Head-Video editor"]
const jobsPa = ["ਸੀਨੀਅਰ ਪ੍ਰੋਡਿਊਸਰ", "ਐਂਕਰ ਕਮ ਪ੍ਰੋਡਿਊਸਰ", "ਪੱਤਰਕਾਰ", "ਵੀਡੀਓ ਐਡੀਟਰ", "ਵੀਡੀਓ ਐਡੀਟਰ", "ਗ੍ਰਾਫਿਕ ਡਿਜ਼ਾਈਨਰ", "ਪ੍ਰੋਡਕਸ਼ਨ ਐਗਜ਼ੀਕਿਊਟਿਵ", "ਸੀਨੀਅਰ ਕੈਮਰਾਮੈਨ", "ਕੈਮਰਾਮੈਨ", "ਵੀਡੀਓ ਐਡੀਟਰ", "ਸਹਾਇਕ ਸੰਪਾਦਕ", "ਪ੍ਰੋਗਰਾਮ ਪ੍ਰੋਡਿਊਸਰ", "ਪੀਸੀਆਰ ਅਤੇ ਵੀਐਮਆਈਐਕਸ ਆਪਰੇਟਰ", "ਐਂਕਰ ਕਮ ਪ੍ਰੋਡਿਊਸਰ", "ਪ੍ਰੋਡਕਸ਼ਨ ਕੋਆਰਡੀਨੇਟਰ", "ਹੈੱਡ-ਵੀਡੀਓ ਐਡੀਟਰ"]

export default ApplicationFrom