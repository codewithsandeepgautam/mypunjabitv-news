import React, { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { FaSearchPlus } from 'react-icons/fa';
import { useLanguage } from '../utils/LanguageContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import { IoClose } from "react-icons/io5";

function Gallery() {
  const { changeLanguage, language } = useLanguage();
  const [imageData, setImageData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const getImages = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/gallery/`);
      setImageData(response?.data);
    } catch (error) {
      console.error('Error fetching images', error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'fixed',
    },
  };

  return (
    <div>
      <Navbar changeLanguage={changeLanguage} currentLanguage={language} />
      <section id="portfolio" className="portfolio section padd">
        <div className="container">
          <div className="isotope-layout">
            <h1 className='text-black text-center pb-4'>{language === "en" ? "Gallery" : "ਗੈਲਰੀ"}</h1>
            <div className="row gy-4 isotope-container">
              {imageData?.map((item, index) => (
                <div key={index} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category}`}>
                  <div className="portfolio-content h-100">
                    <img src={item.image} className="img-fluid" alt={item.alt} />
                    <div className="portfolio-info">
                      <Link className="details-link">
                        <FaSearchPlus className='zoom-icon' onClick={() => openModal(item)} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
        className='Modalset padd'
      >
        {selectedImage && (
          <img src={selectedImage.image} className="img-fluid" alt={selectedImage.alt} />
        )}
        <div>
            <IoClose className='closebtnstyle' onClick={closeModal}/>
          </div>
      </Modal>
      <Footer />
    </div>
  );
}

export default Gallery;
