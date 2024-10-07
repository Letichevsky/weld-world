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
          <Route path="/veld_world/" element={<AboutUsPage />} />
          <Route path="/veld_world/brands/" element={<BrandsPage />} />
          <Route
            path="/veld_world/products"
            element={<CategoriesPage categories={productCategories} />}
          />
          {productCategories.map((category, index) => (
            <Route
              key={index}
              path={`/veld_world/products/${category.path}`}
              element={<ProductsPage products={category.category} />}
            />
          ))}
          <Route path="/veld_world/recipes" element={<OurRecipesPage />} />
          <Route path="/veld_world/contact" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
