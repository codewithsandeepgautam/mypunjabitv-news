import React, { useState } from 'react';
import Worldnews from '../../assets/images/news1national.jpg'
import NDA from '../../assets/images/news-banner.avif'
import News01 from '../../assets/images/news2local.jpg'
import MenuIcon from "@mui/icons-material/Menu";
import { useLanguage } from '../../utils/LanguageContext';

const StateNews = () => {
  const [activeTab, setActiveTab] = useState(1);
  const {language } = useLanguage();

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <section className="live-news padd features tab-section">
        <div class="container">
        <ul className="p-0">
                  <li className="frist_child">
                      <MenuIcon style={{ color: "red", marginRight: "10px" , marginBottom: '2px'}} />
                      <strong style={{fontSize : '18px', textTransform: 'uppercase'}}>{language ==="pu" ? "ਸਟੇਟ ਵਾਈਜ਼ ਨਿਊਜ਼" : "State Wise NEWS"}
                      </strong>
                  </li>
                </ul>
          <div className="tab-buttons">
            <button className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>{language === "pu" ? 'ਵਿਸ਼ਵ ਖਬਰ' :'World News'}</button>
            <button className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>{language === "pu" ? 'ਨੈਸ਼ਨਲ ਨਿਊਜ਼' :'National News'}</button>
            <button className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>{language === "pu" ? 'ਸਥਾਨਕ ਖਬਰ' :'Local News'}</button>
          </div>
          <div className="tab-content pt-4">
            {activeTab === 1 && <div>
              <div className='row'>
                <div className='col-md-7'>
                  <div className='worldnews-div'>
                  <h5 className='pb-2'>{language === "pu" ? 'ਪਾਣੀ ਦੇ ਤੇਜ਼ ਵਹਾਅ ਕਾਰਨ ਰੁੜ੍ਹ ਗਿਆ ਪੁੱਲ, ਲੋਕਾਂ "ਚ ਮੱਚੀ ਹਾਹਾਕਾਰ,ਦੇਖੋ ਤਸਵੀਰਾਂ |' : 'The bridge was washed away due to the rapid flow of water, the people were crying, see the pictures'}</h5>
                  <p>{language === "pu" ? "ਪਿਛਲੇ ਦਿਨਾਂ ਵਿੱਚ ਜਿੱਥੇ ਗਰਮੀ ਨੇ ਹਾਹਾਕਾਰ ਮਚਾਈ ਹੋਈ ਸੀ ਉੱਥੇ ਹੀ ਦੇਸ਼ ਦੇ ਕੁੱਝ ਹਿੱਸਿਆਂ ਵਿੱਚ ਭਾਰੀ ਬਾਰਿਸ਼ ਵੀ ਹੋਈ। ਇਸ ਬਾਰਿਸ਼ ਨੇ ਜਿਥੇ ਕੁਝ ਇਲਾਕਿਆਂ ਵਿੱਚ ਠੰਡ ਪਹੁੰਚਾਈ ਉੱਥੇ ਹੀ ਕਈ ਸ਼ਹਿਰਾਂ ਵਿੱਚ ਪਾਣੀ ਦੇ ਤੇਜ਼ ਵਹਾਅ ਨੇ ਲੋਕਾਂ ਦੇ ਸਾਹ ਵੀ ਸੁਕਾਏ।" :"In the last few days, where the heat had been raging, there was also heavy rain in some parts of the country. While this rain brought cold in some areas, the rapid flow of water in many cities also scared the people."}</p>
                  </div>
                  </div>
                  <div className='col-md-5'>
                  <img src={Worldnews} alt="news" />
                  </div>
              </div>
              </div>}
            {activeTab === 2 && <div>
              <div className='row'>
                <div className='col-md-7'>
                  <div className='worldnews-div'>
                  <h5 className='pb-2'>{language === "pu" ? 'Khanna "ਚ ਨਗਰ ਕੌਂਸਲ ਦੀ ਕਾਰਵਾਈ, ਨਾਜਾਇਜ਼ ਕਬਜ਼ੇ ਹਟਾਏ ਗਏ |' : 'Municipal council action in Khanna, illegal encroachment removed'}</h5>
                  <p>{language === "pu" ? "ਖੰਨਾ ਸ਼ਹਿਰ ਵਿੱਚ ਨਗਰ ਕੌਂਸਲ ਨੇ ਸਖ਼ਤ ਕਾਰਵਾਈ ਕੀਤੀ। ਨਗਰ ਕੌਂਸਲ ਨੇ ਸ਼ਹਿਰ ਵਿੱਚੋਂ ਨਜ਼ਾਇਜ ਕਬਜ਼ੇ ਹਟਾਏ। ਇਸ ਮੌਕੇ ਨਗਰ ਕੌਂਸਲ ਦੇ ਅਧਿਕਾਰੀਆਂ ਦੇ ਨਾਲ ਪੁਲਿਸ ਵੀ ਮੌਜੂਦ ਰਹੀ। ਇਲਾਕੇ ਦੇ ਕੁੱਝ ਦੁਕਾਨਦਾਰਾਂ ਅਤੇ ਲੋਕਾਂ ਵੱਲੋਂ ਸਰਕਾਰ ਦੀ ਇਸ ਕਾਰਵਾਈ ਦੀ ਵਿਰੋਧਤਾ ਵੀ ਕੀਤੀ।" :"In Khanna city, the municipal council took strict action. Municipal council removed illegal encroachments from the city. Police were also present along with municipal council officials on this occasion. Some shopkeepers and people of the area also opposed this action of the government."}</p>
                  </div>
                  </div>
                  <div className='col-md-5'>
                  <img src={News01} alt="news" />
                  </div>
              </div>
              </div>}
            {activeTab === 3 && <div>
              <div className='row'>
                <div className='col-md-7'>
                  <div className='worldnews-div'>
                  <h5 className='pb-2'>{language === "pu" ? 'ਕੰਗਣਾ ਦੇ ਥੱਪੜ ਮਾਰਨ ਵਾਲੀ ਕੁਲਵਿੰਦਰ ਕੌਰ ਦੇ ਗੁੱਸੇ ਨੂੰ ਸਮਝੋ, ਪੰਜਾਬ ਵਿੱਚ ਇਸ ਦੀ ਅਹਿਮੀਅਤ ਬਹੁਤ ਡੂੰਘੀ ਹੈ।' : 'Understand the anger of Kulvinder Kaur, who slapped Kangana, its significance is very deep in Punjab.'}</h5>
                  <p>{language === "pu" ? "ਚੰਡੀਗੜ੍ਹ ਏਅਰਪੋਰਟ 'ਤੇ ਬਾਲੀਵੁੱਡ ਅਭਿਨੇਤਰੀ ਅਤੇ ਨਵੀਂ ਚੁਣੀ ਸੰਸਦ ਮੈਂਬਰ ਕੰਗਨਾ ਰਣੌਤ 'ਤੇ ਸੀਆਈਐਸਐਫ ਦੀ ਮਹਿਲਾ ਕਾਂਸਟੇਬਲ ਕੁਲਵਿੰਦਰ ਕੌਰ ਵੱਲੋਂ ਮਾਰਿਆ ਗਿਆ ਥੱਪੜ ਓਨਾ ਹਿੰਸਾ ਦਾ ਵਿਸ਼ਾ ਨਹੀਂ ਹੈ ਜਿੰਨਾ ਇਸ ਥੱਪੜ ਤੋਂ ਖੁਸ਼ ਹੋਏ ਬੁੱਧੀਜੀਵੀਆਂ ਲਈ ਮਨੋਰੰਜਨ ਦਾ ਕਾਰਨ ਹੈ। ਇਹ ਰੁਝਾਨ ਦੇਸ਼ ਦੀ ਸ਼ਾਂਤੀ ਲਈ ਖ਼ਤਰਨਾਕ ਹੈ। ਹਰਸਿਮਰਤ ਕੌਰ ਵਰਗੇ ਸਤਿਕਾਰਯੋਗ ਆਗੂ ਵੀ ਕੁਲਵਿੰਦਰ ਕੌਰ ਦੀ ਦਲੇਰੀ ਦਾ ਸਮਰਥਨ ਕਰ ਰਹੇ ਹਨ।" :"The slap by CISF's female constable Kulvinder Kaur on Bollywood actress and newly elected MP Kangana Ranaut at Chandigarh airport isn't as much of a matter of violence as it is a cause for amusement for intellectuals who are pleased with this slap. This trend is dangerous for the country's peace. Even respected leaders like Harsimrat Kaur are supporting Kulvinder Kaur's audacity."}</p>


                  </div>
                  </div>
                  <div className='col-md-5'>
                  <img src={NDA} alt="news" />
                  </div>
              </div>
              </div>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StateNews;
