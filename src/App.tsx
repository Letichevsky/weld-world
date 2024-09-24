import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AboutUsPage from "./pages/AboutUsPage";
import BrandsPage from "./pages/BrandsPage";
import ProductsPage from "./pages/ProductsPage";
import OurRecipesPage from "./pages/OurRecipesPage";
import ContactUsPage from "./pages/ContactUsPage";
import Footer from "./components/Footer";
import HeaderBrandsNav from "./components/HeaderBrandsNav";

function App() {
  return (
    <div className="App">
      <div className="w-[100svw] h-[100svh]">
        <Header />
        {/* <HeaderBrandsNav /> */}
        <Routes>
          <Route path="/veld_world/" element={<AboutUsPage />} />
          <Route path="/veld_world/Brands/" element={<BrandsPage />} />
          <Route path="/veld_world/Products" element={<ProductsPage />} />
          <Route path="/veld_world/Recipes" element={<OurRecipesPage />} />
          <Route path="/veld_world/Contact" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
