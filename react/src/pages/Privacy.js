import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useLanguage } from '../utils/LanguageContext';
import { Link } from 'react-router-dom';
import SEO from '../components/common/Seo';
const Privacy = () => {
  const { translate, changeLanguage, language } = useLanguage();

  return (
    <div>
      <SEO title='Privacy | MyPunjabiTv' description='' />
      <Navbar changeLanguage={changeLanguage} currentLanguage={language} />
      <section className="privacy-section padd">
        <div className="container">
          <div className='privacy-back'>
            <div className="row">
              <div className="col-sm-12">
                <h3 className="mt-0">{translate("footerPrivacy")}</h3>

                <p className="my-2">
                  {translate("termsUpdate")}
                  <span className="bluClr">
                    {translate("termsDate")}
                  </span>
                </p>
                <p>
                  {translate("privacyHeadingText")}
                </p>

                <h4 className="subtitleslevel">
                  {translate("privacyInformation")}
                </h4>
                <ul className="list-style">
                  <li>
                    <strong>{translate("privacyPersonalInformation")}</strong><br />
                    {translate('privacyPersonalInformationContent')}
                  </li>
                  <li>
                    <strong>{translate("privacyUsageInfo")}</strong><br />
                    {translate("privacyUsageInfoContent")}
                  </li>
                </ul>
                <h4 className="subtitleslevel">
                  {translate("privacyUseOfInfo")}
                </h4>
                <ul className="list-style">
                  <li>
                    <strong>{translate("privacyService")}</strong><br />
                    {translate("privacyServiceContent")}
                  </li>
                  <li>
                    <strong>{translate("privacyComm")}</strong><br />
                    {translate("privacyCommContent")}
                  </li>
                </ul>

                <h4 className="subtitleslevel">
                  {translate("privacyInfoSharing")}
                </h4>
                <ul className="list-style">
                  <li>
                    <strong>{translate("privacySreviceProvider")}</strong><br />
                    {translate("privacySreviceProviderContent")}
                  </li>
                  <li>
                    <strong>{translate("privacyLegalCompliance")}</strong><br />
                    {translate("privacyLegalComplianceContent")}
                  </li>
                </ul>

                <h4 className="subtitleslevel">
                  {translate("privacySecurity")}
                </h4>
                <p>
                  {translate("privacySecurityContent")}
                </p>

                <h4 className="subtitleslevel">
                  {translate("privacyCookies")}
                </h4>
                <p>
                  {translate("privacyCookiesContent")}
                </p>

                <h4 className="subtitleslevel">
                  {translate("privacyChoices")}
                </h4>
                <p>
                  {translate("privacyChoicesContent1")} <span style={{ color: "#337ab7" }}><Link to={`mailto:${'helpdeskmypunjabitv@gmail.com'}`} className='text-decoration-none'>helpdeskmypunjabitv@gmail.com</Link></span> {translate("privacyChoicesContent2")}
                </p>

                <h4 className="subtitleslevel">
                  {translate("privacyChanges")}
                </h4>
                <p>
                  {translate("privacyChangesContent")}
                </p>

                <h4 className="subtitleslevel">
                  {translate("privacyContact")}
                </h4>
                <p>
                  {translate("privacyConcern")} <span style={{ color: "#337ab7" }}><Link className='text-decoration-none' to={`mailto:${'helpdeskmypunjabitv@gmail.com'}`}>helpdeskmypunjabitv@gmail.com</Link></span>
                </p>

                <p>
                  {translate('privacyEnd')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Privacy;
