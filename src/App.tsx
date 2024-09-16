import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AboutUsPage from './pages/AboutUsPage';
import BrandsPage from './pages/BrandsPage';
import ProductsPage from './pages/ProductsPage';
import OurRecipesPage from './pages/OurRecipesPage';
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <div className="App">
      <div className='w-[100svw] h-[100svh] bg-[#777] flex justify-center items-center' >
        <Header/>
        <Routes>
          <Route path='/' element={<AboutUsPage />}/>
          <Route path='/Brands' element={<BrandsPage />}/>
          <Route path='/Products' element={<ProductsPage />}/>
          <Route path='/Recipes' element={<OurRecipesPage />}/>
          <Route path='/Contact' element={<ContactUsPage />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
