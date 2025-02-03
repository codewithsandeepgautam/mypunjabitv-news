import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../utils/LanguageContext'
// import img from '../../assets/images/breaking-news.webp'
const Categories = () => {
    const { categoryNews } = useLanguage();

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <div className="categories-section">
                <div className="container-fluid px-0">
                    <div className='categories_overflow_menu'>

                        <ul className='cat_menu_list'>
                            {/* <li><div className='menu_item'>News </div>
                                <div className='sub_menu'>
                                    <div className='row'>
                                        <div className='col-2'>
                                        <div>    
                                           World news
                                        </div>
                                       </div>
                                    <div className='col-8 sub_menu_item'>
                                        <div className='menu_item_img'>
                                        <img src={img} alt='la'></img>
                                        </div>
                                        <p>La lal lalala</p>

                                        
                                    </div>
                                    </div>
                                </div>
                            </li> */}
                            {categoryNews.map((category, index) => (
                                (
                                    <li ><Link className='menu_item' to={`/category/${category.categoryHandle}`} >{category.category}</Link>
                                        <div className='sub_menu'>
                                            <ul className='sub_menu_items'>
                                                {category.newsItems.map((newsItem, index) => (
                                                    index < 4 && (
                                                        <li key={newsItem._id}>
                                                            <Link className='sub_menu_item' to={`/news/${category.categoryHandle}/${newsItem.handle}`} onClick={handleLinkClick}>
                                                                <div className='menu_item_img'>
                                                                    <img src={newsItem.img} alt="" />
                                                                </div>
                                                                <p>{newsItem.title.substring(0, 60)}...</p>
                                                            </Link>
                                                        </li>
                                                    )
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                )
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
