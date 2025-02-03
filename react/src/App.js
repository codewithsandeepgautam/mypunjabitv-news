import './App.css';
import { LanguageProvider } from '../src/utils/LanguageContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home';
import NewsArticle from './pages/NewsArticle';
import NewsPage from './pages/NewsPage';
import Contact from './pages/Contact';
import TermsPage from './pages/TermsPage';
import Videos from './pages/Videos';
import NotFound from './pages/404';
import Privacy from './pages/Privacy';
import AboutUs from './pages/AboutUs';
import Scroller from './components/common/Scroller';
import BreakingNews from './pages/BreakingNews';
import SearchNews from './pages/SearchNews';
import CategoryPage from './pages/CategoryPage';
import Advertise from './pages/Advertise';
import NewsReleases from './pages/NewsReleases';
import Investor from './pages/Investor';
import Disclaimer from './pages/Disclaimer';
import Career from './pages/Career';
import PressReleseDetail from './pages/PressReleseDetail';
import Weather from './pages/Weather';
import Shorts from './pages/Shorts';
import Gallery from './pages/Gallery';
function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/news/:categoryHandle/:id' element={<NewsArticle />} />
            <Route path='/press-relese-detail/:categoryHandle/:id' element={<PressReleseDetail />} />
            <Route path='/news' element={<NewsPage />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/terms&conditions' element={<TermsPage />} />
            <Route path='/videos' element={<Videos />} />
            <Route path='/shows' element={<NotFound />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/weather' element={<Weather />} />
            <Route path='/advertise-with-us' element={<Advertise />} />
            <Route path='/press-releases' element={<NewsReleases />} />
            <Route path='/investor' element={<Investor />} />
            <Route path='/disclaimer' element={<Disclaimer />} />
            <Route path='/career' element={<Career />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/shorts' element={<Shorts />} />
            <Route path='/breaking-news' element={<BreakingNews />} />
            <Route path='/category/:categoryHandle' element={<CategoryPage />} />
            <Route path='/searchnews' element={<SearchNews />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
        <Scroller />
      </div>
    </LanguageProvider>
  );
}
export default App;
