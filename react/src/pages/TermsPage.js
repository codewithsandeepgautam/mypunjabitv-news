import React from "react";
import Footer from "../components/common/Footer";
import { useLanguage } from "../utils/LanguageContext";
import Navbar from "../components/common/Navbar";
import SEO from "../components/common/Seo";
// import termsOne from "../../assets/images/refund/why360-patten.png";
const TermsPage = () => {
  const { language, changeLanguage, translate } = useLanguage();

  return (
    <>
      <SEO title="Terms | MyPunjabiTv" description="" />
      <Navbar changeLanguage={changeLanguage} currentLanguage={language} />
      <section className="privacy-section padd">
        {/* <img src={termsOne} className="absimggCL" width="50" /> */}
        <div className="container">
          <div className="privacy-back">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="mt-0">{translate('footerT&C')}</h3>

                <p className="my-2">
                  {translate("termsUpdate")}{" "}
                  <span className="bluClr">
                    {translate("termsDate")}
                  </span>
                </p>
                <p>
                  {translate("termsHeadingText")}
                </p>
                <ul className="list-style">
                  <h4 className="subtitleslevel">{translate("termsAcceptance")}</h4>
                  <li>
                    {translate("termsAcceptanceContent")}
                  </li>
                  <h4 className="subtitleslevel">{translate("termsService")}</h4>
                  <li>
                    {translate("termsServiceContent")}
                  </li>
                  <h4 className="subtitleslevel">{translate('termsUserResponsibilities')}</h4>
                  <li>
                    {translate("termsUserResContent")}
                  </li>
                  <h4 className="subtitleslevel">{translate("termsDataAndSecurity")}</h4>
                  <li>
                    {translate("termsDataAndSecurityContent")}
                  </li>
                  <h4 className="subtitleslevel">{translate("termsPayments")}</h4>
                  <li>
                    {translate("termsPaymentsContent")}
                  </li>
                  <h4 className="subtitleslevel">{translate("termsTermination")}</h4>
                  <li>
                    {translate("termsTerminationContent")}
                  </li>
                  <h4 className="subtitleslevel">{translate("termsIP")}</h4>
                  <li>
                    {translate("termsIPContent")}
                  </li>
                  <h4 className="subtitleslevel">{translate("termsChanges")}</h4>
                  <li>
                    {translate("termsChangesContent")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsPage;

