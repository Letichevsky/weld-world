import { useNavigate } from "react-router-dom";
import brandsPageBG from "../assets/images/brandsPageBG.jpg";
import Product from "../components/Product";

interface CategoriesData {
  image: string;
  title: string;
  path: string;
}

interface CategoriesPageProps {
  categories: CategoriesData[];
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <img
        src={brandsPageBG}
        alt="Trees and vally"
        className="object-cover w-full"
      />
      <div className="w-full ">
        <div className="w-full max-w-[70svw] mx-auto py-[50px] grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
          {categories.map((category, index) => (
            <Product
              key={index}
              image={category.image}
              title={category.title}
              onClick={() => {
                navigate(`/veld_world/products/${category.path}`);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
