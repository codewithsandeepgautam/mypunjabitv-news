import React from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { useLanguage } from "../utils/LanguageContext";
const Disclaimer = () => {
    const { changeLanguage, language, translate } = useLanguage()

    return (
        <>
            <Navbar changeLanguage={changeLanguage} currentLanguage={language} />
            <section className="padd NewsReleases">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="mb-3 text-black">{translate("footerDisclaimer")}</h2>
                            <div className="list-group">
                                {language === "en" ? (content.map((item, index) => (
                                    <div key={index} className="p-2">
                                        <h5 className="subtitleslevel pb-2 headingItems">{item.heading}</h5>
                                        <p className="pb-2">{item.text}</p>
                                    </div>
                                ))) : (contentPn.map((item, index) => (
                                    <div key={index} className="p-2">
                                        <h5 className="subtitleslevel pb-2 headingItems">{item.heading}</h5>
                                        <p className="pb-2">{item.text}</p>
                                    </div>
                                ))
                                )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};
const content = [

    {
        heading: "News",
        text: "The News section of the Web Site may contain news and other articles that have been sourced from newspapers, magazines and third party web sites. The sources of all such articles have been named and clearly indicated in appropriate places. Except for rights that have been expressly granted to eMudhra by the respective authors/ publishers of such articles, eMudhra does not claim any other rights in such articles, including copyrights and other intellectual property rights. Such articles have been published on the Web Site for information purposes only and eMudhra disclaims any and all liability in connection therewith."
    },
    {
        heading: "Other Contents",
        text: "The other contents included on the Web Site, including but not limited to text, graphics, logos, button icons, images, audio clips, trademarks, service marks, domain names, designs, software etc., are the properties of eMudhra or its content providers and protected by Indian and international intellectual property laws."
    },
    {
        heading: "Cookies",
        text: "To personalize your experience on our website, we may assign your computer browser a unique random number called a cookie. Cookies enhance website performance in important ways like personalizing your experience, or making your visit more convenient. eMudhra or its affiliates or vendors may use this data to analyze trends and statistics and keep track of the domains from which people visit and also measure visitor activity one eMudhra Limited web sites, but in doing so eMudhra shall keep the information anonymous. If you do not want your transaction details used in this manner, you can either disable your cookies or opt-out at the download or request page."
    },
    {
        heading: "Legal Disclaimers",
        text: "eMudhra has not reviewed any or all of the web sites linked to its Web Site and is not responsible for the content of any off-site pages or any other web sites linked to the Web Site. Please understand that any non eMudhra web site is independent from eMudhra and eMudhra has no control over the content on that web site. In addition, a link to a non - eMudhra web site does not mean that eMudhra endorses or accepts any responsibility for the content, or the use, of such site. It is the user's responsibility to take precautions to ensure that whatever is selected is free of such items as viruses, worms, Trojan horses and other items of a destructive nature."
    },
    {
        heading: "Indenity",
        text: "You agree to defend, indenify, and hold harmless eMudhra and/or its associate entities, their officers, directors, employees and agents, from and against any claims, actions or demands, including without limitation reasonable legal and accounting fees, alleging or resulting from your use of the web site material or your breach of these Terms and Conditions of Web site use."
    },
];
const contentPn = [
    {
        heading: "ਖ਼ਬਰਾਂ",
        text: "ਵੈੱਬ ਸਾਈਟ ਦੇ ਨਿਊਜ਼ ਸੈਕਸ਼ਨ ਵਿੱਚ ਖ਼ਬਰਾਂ ਅਤੇ ਹੋਰ ਲੇਖ ਸ਼ਾਮਲ ਹੋ ਸਕਦੇ ਹਨ ਜੋ ਅਖ਼ਬਾਰਾਂ, ਰਸਾਲਿਆਂ ਅਤੇ ਤੀਜੀ ਧਿਰ ਦੀਆਂ ਵੈਬ ਸਾਈਟਾਂ ਤੋਂ ਪ੍ਰਾਪਤ ਕੀਤੇ ਗਏ ਹਨ। ਅਜਿਹੇ ਸਾਰੇ ਲੇਖਾਂ ਦੇ ਸਰੋਤਾਂ ਦੇ ਨਾਮ ਦਿੱਤੇ ਗਏ ਹਨ ਅਤੇ ਉਚਿਤ ਥਾਵਾਂ 'ਤੇ ਸਪਸ਼ਟ ਤੌਰ 'ਤੇ ਸੰਕੇਤ ਦਿੱਤੇ ਗਏ ਹਨ। ਅਜਿਹੇ ਲੇਖਾਂ ਦੇ ਸਬੰਧਤ ਲੇਖਕਾਂ/ਪ੍ਰਕਾਸ਼ਕਾਂ ਦੁਆਰਾ eMudhra ਨੂੰ ਸਪਸ਼ਟ ਤੌਰ 'ਤੇ ਦਿੱਤੇ ਗਏ ਅਧਿਕਾਰਾਂ ਨੂੰ ਛੱਡ ਕੇ, eMudhra ਅਜਿਹੇ ਲੇਖਾਂ ਵਿੱਚ ਕਾਪੀਰਾਈਟਸ ਅਤੇ ਹੋਰ ਬੌਧਿਕ ਸੰਪੱਤੀ ਅਧਿਕਾਰਾਂ ਸਮੇਤ ਕਿਸੇ ਹੋਰ ਅਧਿਕਾਰਾਂ ਦਾ ਦਾਅਵਾ ਨਹੀਂ ਕਰਦੀ ਹੈ। ਅਜਿਹੇ ਲੇਖ ਸਿਰਫ਼ ਜਾਣਕਾਰੀ ਦੇ ਉਦੇਸ਼ਾਂ ਲਈ ਵੈੱਬ ਸਾਈਟ 'ਤੇ ਪ੍ਰਕਾਸ਼ਿਤ ਕੀਤੇ ਗਏ ਹਨ ਅਤੇ eMudhra ਇਸਦੇ ਸਬੰਧ ਵਿੱਚ ਕਿਸੇ ਵੀ ਅਤੇ ਸਾਰੀ ਦੇਣਦਾਰੀ ਨੂੰ ਰੱਦ ਕਰਦਾ ਹੈ।"
    },
    {
        heading: "ਹੋਰ ਸਮੱਗਰੀ",
        text: "ਵੈੱਬ ਸਾਈਟ 'ਤੇ ਸ਼ਾਮਲ ਹੋਰ ਸਮੱਗਰੀਆਂ, ਜਿਸ ਵਿੱਚ ਟੈਕਸਟ, ਗ੍ਰਾਫਿਕਸ, ਲੋਗੋ, ਬਟਨ ਆਈਕਨ, ਚਿੱਤਰ, ਆਡੀਓ ਕਲਿੱਪ, ਟ੍ਰੇਡਮਾਰਕ, ਸਰਵਿਸ ਮਾਰਕ, ਡੋਮੇਨ ਨਾਮ, ਡਿਜ਼ਾਈਨ, ਸਾਫਟਵੇਅਰ ਆਦਿ ਸ਼ਾਮਲ ਹਨ ਪਰ ਇਨ੍ਹਾਂ ਤੱਕ ਹੀ ਸੀਮਿਤ ਨਹੀਂ, eMudhra ਜਾਂ ਇਸਦੀ ਸਮੱਗਰੀ ਦੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਹਨ। ਪ੍ਰਦਾਤਾ ਅਤੇ ਭਾਰਤੀ ਅਤੇ ਅੰਤਰਰਾਸ਼ਟਰੀ ਬੌਧਿਕ ਸੰਪੱਤੀ ਕਾਨੂੰਨਾਂ ਦੁਆਰਾ ਸੁਰੱਖਿਅਤ।"
    },
    {
        heading: "ਕੂਕੀਜ਼",
        text: "ਸਾਡੀ ਵੈੱਬਸਾਈਟ 'ਤੇ ਤੁਹਾਡੇ ਅਨੁਭਵ ਨੂੰ ਨਿਜੀ ਬਣਾਉਣ ਲਈ, ਅਸੀਂ ਤੁਹਾਡੇ ਕੰਪਿਊਟਰ ਬ੍ਰਾਊਜ਼ਰ ਨੂੰ ਇੱਕ ਵਿਲੱਖਣ ਬੇਤਰਤੀਬ ਨੰਬਰ ਦੇ ਸਕਦੇ ਹਾਂ ਜਿਸਨੂੰ ਕੂਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ। ਕੂਕੀਜ਼ ਤੁਹਾਡੇ ਅਨੁਭਵ ਨੂੰ ਵਿਅਕਤੀਗਤ ਬਣਾਉਣ, ਜਾਂ ਤੁਹਾਡੀ ਫੇਰੀ ਨੂੰ ਵਧੇਰੇ ਸੁਵਿਧਾਜਨਕ ਬਣਾਉਣ ਵਰਗੇ ਮਹੱਤਵਪੂਰਨ ਤਰੀਕਿਆਂ ਨਾਲ ਵੈੱਬਸਾਈਟ ਦੀ ਕਾਰਗੁਜ਼ਾਰੀ ਨੂੰ ਵਧਾਉਂਦੀਆਂ ਹਨ। eMudhra ਜਾਂ ਇਸਦੇ ਸਹਿਯੋਗੀ ਜਾਂ ਵਿਕਰੇਤਾ ਇਸ ਡੇਟਾ ਦੀ ਵਰਤੋਂ ਰੁਝਾਨਾਂ ਅਤੇ ਅੰਕੜਿਆਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨ ਅਤੇ ਉਹਨਾਂ ਡੋਮੇਨਾਂ ਦਾ ਪਤਾ ਲਗਾਉਣ ਲਈ ਕਰ ਸਕਦੇ ਹਨ ਜਿੱਥੋਂ ਲੋਕ ਵਿਜ਼ਿਟ ਕਰਦੇ ਹਨ ਅਤੇ ਇੱਕ eMudhra ਲਿਮਟਿਡ ਵੈੱਬ ਸਾਈਟਾਂ ਵਿਜ਼ਿਟਰ ਗਤੀਵਿਧੀ ਨੂੰ ਵੀ ਮਾਪਦੇ ਹਨ, ਪਰ ਅਜਿਹਾ ਕਰਨ ਵਿੱਚ eMudhra ਜਾਣਕਾਰੀ ਨੂੰ ਅਗਿਆਤ ਰੱਖੇਗੀ। ਜੇਕਰ ਤੁਸੀਂ ਨਹੀਂ ਚਾਹੁੰਦੇ ਕਿ ਤੁਹਾਡੇ ਲੈਣ-ਦੇਣ ਦੇ ਵੇਰਵੇ ਇਸ ਤਰੀਕੇ ਨਾਲ ਵਰਤੇ ਗਏ ਹਨ, ਤਾਂ ਤੁਸੀਂ ਜਾਂ ਤਾਂ ਆਪਣੀਆਂ ਕੂਕੀਜ਼ ਨੂੰ ਅਯੋਗ ਕਰ ਸਕਦੇ ਹੋ ਜਾਂ ਡਾਊਨਲੋਡ ਜਾਂ ਬੇਨਤੀ ਪੰਨੇ 'ਤੇ ਔਪਟ-ਆਊਟ ਕਰ ਸਕਦੇ ਹੋ।"
    },
    {
        heading: "ਕਨੂੰਨੀ ਬੇਦਾਅਵਾ",
        text: "ਮੁਧਰਾ ਨੇ ਆਪਣੀ ਵੈੱਬ ਸਾਈਟ ਨਾਲ ਲਿੰਕ ਕੀਤੀਆਂ ਕਿਸੇ ਵੀ ਜਾਂ ਸਾਰੀਆਂ ਵੈਬ ਸਾਈਟਾਂ ਦੀ ਸਮੀਖਿਆ ਨਹੀਂ ਕੀਤੀ ਹੈ ਅਤੇ ਕਿਸੇ ਵੀ ਆਫ-ਸਾਈਟ ਪੰਨਿਆਂ ਜਾਂ ਵੈਬ ਸਾਈਟ ਨਾਲ ਲਿੰਕ ਕੀਤੀਆਂ ਕਿਸੇ ਹੋਰ ਵੈੱਬ ਸਾਈਟਾਂ ਦੀ ਸਮੱਗਰੀ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਇਹ ਸਮਝ ਲਓ ਕਿ ਕੋਈ ਵੀ ਗੈਰ-eMudhra ਵੈੱਬ ਸਾਈਟ eMudhra ਤੋਂ ਸੁਤੰਤਰ ਹੈ ਅਤੇ eMudhra ਦਾ ਉਸ ਵੈੱਬਸਾਈਟ 'ਤੇ ਸਮੱਗਰੀ 'ਤੇ ਕੋਈ ਕੰਟਰੋਲ ਨਹੀਂ ਹੈ। ਇਸ ਤੋਂ ਇਲਾਵਾ, ਕਿਸੇ ਗੈਰ- eMudhra ਵੈੱਬ ਸਾਈਟ ਦੇ ਲਿੰਕ ਦਾ ਮਤਲਬ ਇਹ ਨਹੀਂ ਹੈ ਕਿ eMudhra ਅਜਿਹੀ ਸਾਈਟ ਦੀ ਸਮੱਗਰੀ, ਜਾਂ ਵਰਤੋਂ ਲਈ ਕਿਸੇ ਵੀ ਜ਼ਿੰਮੇਵਾਰੀ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ ਜਾਂ ਸਵੀਕਾਰ ਕਰਦਾ ਹੈ। ਇਹ ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ ਸਾਵਧਾਨੀ ਵਰਤਣਾ ਉਪਭੋਗਤਾ ਦੀ ਜ਼ਿੰਮੇਵਾਰੀ ਹੈ ਕਿ ਜੋ ਵੀ ਚੁਣਿਆ ਗਿਆ ਹੈ ਉਹ ਵਾਇਰਸ, ਕੀੜੇ, ਟਰੋਜਨ ਘੋੜੇ ਅਤੇ ਵਿਨਾਸ਼ਕਾਰੀ ਕੁਦਰਤ ਦੀਆਂ ਹੋਰ ਵਸਤੂਆਂ ਤੋਂ ਮੁਕਤ ਹੈ।"
    },
    {
        heading: "ਮੁਆਵਜ਼ਾ",
        text: "ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਦਾਅਵਿਆਂ, ਕਾਰਵਾਈਆਂ ਜਾਂ ਮੰਗਾਂ ਤੋਂ ਅਤੇ ਵਿਰੁੱਧ ਨੁਕਸਾਨ ਰਹਿਤ eMudhra ਅਤੇ/ਜਾਂ ਇਸ ਦੀਆਂ ਸਹਿਯੋਗੀ ਸੰਸਥਾਵਾਂ, ਉਹਨਾਂ ਦੇ ਅਧਿਕਾਰੀਆਂ, ਨਿਰਦੇਸ਼ਕਾਂ, ਕਰਮਚਾਰੀਆਂ ਅਤੇ ਏਜੰਟਾਂ ਦਾ ਬਚਾਅ ਕਰਨ, ਅਣਡਿੱਠ ਕਰਨ ਅਤੇ ਰੱਖਣ ਲਈ ਸਹਿਮਤ ਹੁੰਦੇ ਹੋ, ਜਿਸ ਵਿੱਚ ਬਿਨਾਂ ਕਿਸੇ ਸੀਮਾ ਦੇ ਵਾਜਬ ਕਾਨੂੰਨੀ ਅਤੇ ਲੇਖਾ ਫੀਸਾਂ, ਦੋਸ਼ ਜਾਂ ਨਤੀਜੇ ਵਜੋਂ ਸ਼ਾਮਲ ਹਨ। ਵੈੱਬ ਸਾਈਟ ਸਮੱਗਰੀ ਦੀ ਤੁਹਾਡੀ ਵਰਤੋਂ ਜਾਂ ਵੈੱਬ ਸਾਈਟ ਦੀ ਵਰਤੋਂ ਦੇ ਇਹਨਾਂ ਨਿਯਮਾਂ ਅਤੇ ਸ਼ਰਤਾਂ ਦੀ ਤੁਹਾਡੀ ਉਲੰਘਣਾ।"
    }
]

export default Disclaimer;

