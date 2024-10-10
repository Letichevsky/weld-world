import brandsPageBG from "../assets/images/brandsPageBG.jpg";
import Product from "../components/Product";
import { useEffect } from "react";
import { scrollToTop } from "../utils/utils";

interface ProductData {
  image: string;
  title: string;
  description: string;
}

interface ProductsData {
  brand: string;
  products: ProductData[];
}

interface ProductsPageProps {
  products: ProductsData[] | undefined;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => {
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
      <div className="w-full pt-6">
        {products &&
          products.map((category, index) => (
            <div key={index} className="w-full max-w-[70svw] mx-auto">
              <div className="flex items-center">
                <h2 className="text-[#18713b] text-[32px] pr-4 text-nowrap">
                  {category.brand}
                </h2>
                <div className="h-[2px] w-full bg-[#18713b]"></div>
              </div>
              <div className="w-full max-w-[70svw] mx-auto py-[50px] grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
                {category.products.map((product, index) => (
                  <Product
                    key={index}
                    image={product.image}
                    title={product.title}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductsPage;
