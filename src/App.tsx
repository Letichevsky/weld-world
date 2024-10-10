import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AboutUsPage from "./pages/AboutUsPage";
import BrandsPage from "./pages/BrandsPage";
import ProductsPage from "./pages/ProductsPage";
import OurRecipesPage from "./pages/OurRecipesPage";
import ContactUsPage from "./pages/ContactUsPage";
import Footer from "./components/Footer";
import { productCategories } from "./data/productsData";
import CategoriesPage from "./pages/CategoriesPage";

function App() {
  return (
    <div className="App">
      <div className="w-[100svw] h-[100svh]">
        <Header />
        {/* <HeaderBrandsNav /> */}
        <Routes>
          <Route path="/" element={<AboutUsPage />} />
          <Route path="/brands/" element={<BrandsPage />} />
          <Route
            path="/products"
            element={<CategoriesPage categories={productCategories} />}
          />
          {productCategories.map((category, index) => (
            <Route
              key={index}
              path={`/products/${category.path}`}
              element={<ProductsPage products={category.category} />}
            />
          ))}
          <Route path="/recipes" element={<OurRecipesPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
