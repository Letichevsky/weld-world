import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import brandsPageBG from "../assets/images/brandsPageBG.jpg";
import SimpleSlider from "../components/ProductsSlider";
import "./BrandsPage.css";
import brandsData from "../data/brandsData";
import { productCategories } from "../data/productsData";
import { scrollToTop } from "../utils/utils";

const productsFilter = (brand: string) => {
  const findProducts: Array<any> = [];

  productCategories.forEach((category) => {
    category.category.forEach((subCategory) => {
      if (subCategory.brand === brand) {
        findProducts.push(...subCategory.products);
      }
    });
  });

  return findProducts;
};

const dreamValleyProducts = productsFilter("Dream Valley");
const divaOlivaProducts = productsFilter("Diva Oliva");
const tropicLifeProducts = productsFilter("Tropic Life");
const veldWorldProducts = productsFilter("Veld World");

const BrandsPage: React.FC = () => {
  const location = useLocation();
  const [selectedBrand, setSelectedBrand] = useState(brandsData[0]);

  useEffect(() => {
    scrollToTop();
  }, []);

  function scrollToTarget(tergetOffset: number) {
    const element = document.getElementById("aboutBrand");
    if (element) {
      const offset =
        element.getBoundingClientRect().top + window.scrollY - tergetOffset;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    const brandIndex = new URLSearchParams(location.search).get("brandIndex");
    if (brandIndex) {
      setSelectedBrand(brandsData[parseInt(brandIndex)]);
      scrollToTarget(200);
    }
  }, [location]);

  const handleBrandClick = (brand: (typeof brandsData)[number]) => {
    if (selectedBrand !== brand) {
      setSelectedBrand(brand);
      scrollToTarget(100);
      window.history.pushState(
        {},
        "",
        `?brandIndex=${brandsData.indexOf(brand)}`
      );
    }
  };

  const getProductsForSelectedBrand = () => {
    switch (selectedBrand.title) {
      case "Dream Valley":
        return dreamValleyProducts;
      case "Diva Oliva":
        return divaOlivaProducts;
      case "Tropic Life":
        return tropicLifeProducts;
      case "Veld World":
        return veldWorldProducts;
      default:
        return [];
    }
  };

  return (
    <div className="w-full">
      <img
        src={brandsPageBG}
        alt="Trees and vally"
        className="object-cover w-full"
      />
      <div id="aboutBrand" className="w-full">
        <div className="w-full max-w-[70svw] mx-auto flex flex-col items-center gap-8 py-[50px]">
          <img
            src={selectedBrand.logo}
            alt={`${selectedBrand.title} Logo`}
            className="brandLogo object-cover h-[190px] w-auto"
          />
          <p className="text-[#696969] max-w-[750px]">
            {selectedBrand.description}
          </p>
        </div>
        <div className="w-full bg-[#18713b] h-[150px]">
          <div className="h-full max-w-[70svw] bg-[#fff] mx-auto px-16">
            <SimpleSlider brand={getProductsForSelectedBrand()} />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full max-w-[70svw] mx-auto flex flex-col items-center pt-8 gap-4">
            <h3 className="text-[32px]">Our brands</h3>
            <p className="text-[#696969]">
              The company's distribution product portfolio includes the
              following brands:
            </p>
            <div className="w-full flex justify-between">
              {brandsData.map((brand, index) => (
                <img
                  key={index}
                  src={brand.logo}
                  alt={`${brand.title} logo`}
                  className="brandLogo h-[200px] w-[200px] hover:scale-[1.1] transition-all cursor-pointer"
                  onClick={() => handleBrandClick(brand)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;
