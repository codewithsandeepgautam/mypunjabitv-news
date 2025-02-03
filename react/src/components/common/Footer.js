import React, { useEffect, useState } from 'react'
import footerLogo from '../../assets/images/footer-logo.png'
import { useLanguage } from '../../utils/LanguageContext'
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import qrcode from '../../assets/images/qrcode.png';
import { FaAnglesRight } from "react-icons/fa6";
import facebooklogo from "../../assets/socialicons/facebook.png";
import instagramlogo from "../../assets/socialicons/instagram.png";
import twitterlogo from "../../assets/socialicons/twitter.png";
import youtubelogo from "../../assets/socialicons/youtube.png";

const Footer = () => {
   const location = useLocation()
   const { translate } = useLanguage();
   let date = new Date();
   const [year, setYear] = useState("");
   const handleLinkClick = () => {
      window.scrollTo(0, 0);
   };
   const isActive = (path) => {
      return location.pathname === path ? 'active' : '';
   }
   useEffect(() => {
      let getYear = date.getFullYear();
      setYear(getYear);
   })
   return (
      <>
         <div>
            <footer>
               <div className="padd footer-top">
                  <div className="container">
                     <div className="row">
                        <div className="col-sm-5">
                           <Link to="/" onClick={handleLinkClick}>
                              <img src={footerLogo} className="footer-logo" alt="" />
                           </Link>
                           <p className="font-weight-normal mt-4 mb-5">
                              {translate('footerText')}
                           </p>
                           <div className="social-icons-container">
                              <Link to="https://www.facebook.com/tvmypunjabi" target='_blank' className="social-icons">
                                 <img src={facebooklogo} alt="facebook" />
                              </Link>
                              <Link to="https://www.instagram.com/mypunjabitv/" target='_blank' className="social-icons">
                                 <img src={instagramlogo} alt="instagram" />
                              </Link>
                              <Link to="https://www.youtube.com/@MYPunjabiTV" target='_blank' className="social-icons">
                                 <img src={youtubelogo} alt="youtube" />
                              </Link>
                              <Link to="https://twitter.com/mypunjabitv" target='_blank' className="social-icons">
                                 <img src={twitterlogo} alt="twitter" />
                              </Link>
                           </div>
                        </div>
                        <div className="col-sm-4">
                           <h3 className="font-weight-bold mb-3">{translate("footerLinks")}</h3>
                           <div className="row">
                              <div className="col-sm-12  footer-recent-post">
                                 <ul className="footer-border-bottom pb-2 mb-2">
                                    <li className='pb-2'><FaAnglesRight className='footer-after-icon' /><Link className={isActive('/press-releases')} to='/press-releases' onClick={handleLinkClick}>{translate('footerPressReleases')}</Link></li>
                                    <li className='pb-2'><FaAnglesRight className='footer-after-icon' /><Link className={isActive('/advertise-with-us')} to='/advertise-with-us' onClick={handleLinkClick}>{translate("footerAdvertise")}</Link></li>
                                    <li className='pb-2'><FaAnglesRight className='footer-after-icon' /><Link className={isActive('/investor')} to='/investor' onClick={handleLinkClick}>{translate('footerInvestor')}</Link></li>
                                    <li className='pb-2'><FaAnglesRight className='footer-after-icon' /><Link className={isActive('/disclaimer')} to='/disclaimer' onClick={handleLinkClick}>{translate('footerDisclaimer')}</Link></li>
                                    <li className='pb-2'><FaAnglesRight className='footer-after-icon' /><Link className={isActive('/career')} to='/career' onClick={handleLinkClick}>{translate("footerCareer")}</Link></li>
                                    <li className='pb-2'><FaAnglesRight className='footer-after-icon' /><Link className={isActive('/gallery')} to='/gallery' onClick={handleLinkClick}>{translate("footerGallery")}</Link></li>
                                    <li><FaAnglesRight className='footer-after-icon' /><Link className={isActive('/contact-us')} to='/contact-us' onClick={handleLinkClick}>{translate('navContact')}</Link></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-sm-3">
                           <h3 className="font-weight-bold mb-3">{translate('footerQr')}</h3>
                           <img style={{ width: '200px' }} src={qrcode} alt="QR Code" />
                        </div>
                     </div>
                  </div>
               </div>
            </footer>
            <div className="main-footer">
               <div className="container">
                  <div className="row">
                     <div className="col-md-6">
                        <p className="text-start">{translate("footerCopyRight")} © {translate('webName')}{year}</p>
                     </div>
                     <div className="col-md-6">
                        <ul className="footer-menu text-end mb-0">
                           <li><Link className={isActive('/terms&conditions')} to='/terms&conditions' onClick={handleLinkClick}> {translate('footerT&C')}</Link></li>
                           <li><Link className={isActive('/privacy')} to='/privacy' onClick={handleLinkClick}> {translate('footerPrivacy')} </Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
export default Footer
