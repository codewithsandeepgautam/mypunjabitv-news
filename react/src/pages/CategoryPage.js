import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../components/common/Navbar'
import { useLanguage } from '../utils/LanguageContext'
import { useParams, Link } from 'react-router-dom'
import Footer from '../components/common/Footer'
import SEO from '../components/common/Seo'

const CategoryPage = () => {
  const { changeLanguage, language, newsWithCategory, translate, latestNews, categoryNews } = useLanguage()
  const { categoryHandle: selectedCategory } = useParams();
  const [newsList, setNewsList] = useState([]);
  const [category, setCategory] = useState('')

  const stripHtmlTags = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  useEffect(() => {
    const filterNewsByCategory = () => {
      const selectedNews = categoryNews.find(item => item.categoryHandle === selectedCategory);
      if (selectedNews) {
        setNewsList(selectedNews.newsItems);
        setCategory(selectedNews.category);
      } else {
        setNewsList([]);
      }
    };
    filterNewsByCategory();
  }, [selectedCategory, categoryNews]);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  console.log("categoryNews<<", categoryNews);
  return (
    <div>
      <SEO title='Categories | MyPunjabiTv' description='' />
      <Navbar changeLanguage={changeLanguage} currentLanguage={language} />
      <section class="Categorie-section1 py-5 padd">
        <div class="container">
          <h2 class="latestbracking-news pb-3 ps-2">{category}</h2>
          <div class="row">
            <div class="col-lg-7">
              {newsList.length > 0 && (
                <Link to={`/news/${selectedCategory}/${newsList[0].handle}`} onClick={handleLinkClick}>
                  <div class="Categorie-newsheading">
                    <img className="w-100" src={newsList[0].img} alt="News" />
                    <div class="hero-news-head pt-3">
                      <h5><strong>
                        {newsList[0].title}
                      </strong></h5>
                      <p class="pt-2 pb-4">{stripHtmlTags(newsList[0].description)}...</p>
                    </div>
                  </div>
                </Link>
              )}
            </div>
            <div class="col-lg-5">
              {newsList.slice(0, 4).map((news, index) => (
                <Link to={`/news/${selectedCategory}/${news.handle}`} key={index} onClick={handleLinkClick} className="news-categorie-subhead">
                  <span>
                    {category}
                  </span>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <img src={news?.img} alt="news-img" />
                    </div>
                    <div className='col-lg-6'>
                      <p>
                        <div className="story-title">
                          {news.title.length > 100 ? `${news.title.substring(0, 100)}...` : news.title}
                        </div>
                      </p>
                    </div>
                  </div>
                </Link>
              ))}

            </div>
          </div>
          <div class="">
            <div class=" mt-3 row">
              {newsList.slice(0, 4).reverse().map((news, index) => (
                <div className='col-lg-3'><Link to={`/news/${selectedCategory}/${news.handle}`} onClick={handleLinkClick} key={index} class="news-categorie-subhead d-table-cell">
                  <span>
                    {category}
                  </span>
                  <img className='' src={news?.img} alt="news-img" />
                  <p>
                    <div class="story-title">{news.title.length > 75 ? `${news.title.substring(0, 75)}...` : news.title}</div>
                  </p>
                </Link></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        {latestNews.length > 0 && (
          <div className="live-news all-category py-4">
            <div className="container">
              <div className="p-4 backgroundclr">
                <div className="row">
                  <h4>{translate('latestNewsHeading')}</h4>
                  <div className="col-md-7">
                    <Link onClick={handleLinkClick} className="text-decoration-none text-dark" to={`/news/${latestNews.categoryHandle}/${latestNews[0].handle}`}>
                      <div className="top-news-section-div">
                        <div className="Intertenment-img position-relative">
                          <img width="100%" src={latestNews[0].img} alt="" />
                          <h5>{latestNews[0].title}</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-5">
                    {latestNews.slice(1, 6).map((newsItems, index) => (
                      <Link onClick={handleLinkClick} className="text-decoration-none text-dark" to={`/news/${newsItems.categoryHandle}/${newsItems.handle}`} key={index}>
                        <div className="news-post pb-2 mb-2">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="politics_img">
                                <img className="w-100" src={newsItems.img} alt="" />
                              </div>
                            </div>
                            <div className="col-md-8">
                              <h5>{newsItems.title.length > 75 ? `${newsItems.title.substring(0, 75)}...` : newsItems.title}</h5>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>



      <Footer />
    </div>
  )
}

export default CategoryPage
