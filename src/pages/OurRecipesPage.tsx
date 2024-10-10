import brandsPageBG from "../assets/images/brandsPageBG.jpg";
import { useEffect } from "react";
import { scrollToTop } from "../utils/utils";
// import Product from "../components/Product";
// import SimpleSlider from "../components/ProductsSlider";

const OurRecipesPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="w-full">
      <img
        src={brandsPageBG}
        alt="Trees and vally"
        className="object-cover w-full"
      />
      <div className="w-full">
        <div className="w-full max-w-[70svw] mx-auto h-[500px] flex justify-center items-center">
          <p className="text-[64px] text-[#696969] uppercase text-nowrap">
            Our recipes
          </p>
        </div>
        <div className="w-full max-w-[70svw] mx-auto py-[50px] grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
          {/* <Product/> */}
        </div>
      </div>
      <div className="w-full bg-[#18713b] h-[150px]">
        <div className="h-full max-w-[70svw] bg-[#f7f7f7] mx-auto px-16">
          {/* <SimpleSlider /> */}
        </div>
      </div>
    </div>
  );
};

export default OurRecipesPage;
