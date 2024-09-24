import { useNavigate } from "react-router-dom";
import "./HeaderBrandsNav.css";
import divaOliva from "../assets/images/diva_oliva.svg";
import dreamValley from "../assets/images/Dream_Valley.svg";
import tropicLife from "../assets/images/tropic_life.svg";
import veld from "../assets/images/veld.svg";

const HeaderBrandsNav: React.FC = () => {
  const navigate = useNavigate();

  const handleBrandClick = (index: number) => {
    navigate(`/veld_world/Brands?brandIndex=${index}`);
  };

  return (
    <div className="HeaderBrandsNav w-[70svw] bg-[#fff] flex justify-around p-4 fixed top-[50px] left-1/2 -translate-x-1/2 items-center z-50">
      <div className="HeaderBrandsNavArrow w-4 h-4 bg-[#fff] absolute right-[400px] top-[-8px]"></div>
      <img
        src={divaOliva}
        alt="Diva Oliva logo"
        className="w-28 h-auto hover:scale-[1.1] transition-all"
        onClick={() => handleBrandClick(0)}
      />
      <img
        src={dreamValley}
        alt="Dream Valley logo"
        className="w-28 h-auto hover:scale-[1.1] transition-all"
        onClick={() => handleBrandClick(1)}
      />
      <img
        src={tropicLife}
        alt="Tropic Life logo"
        className="w-28 h-auto hover:scale-[1.1] transition-all"
        onClick={() => handleBrandClick(2)}
      />
      <img
        src={veld}
        alt="Veld World logo"
        className="w-28 h-auto hover:scale-[1.1] transition-all"
        onClick={() => handleBrandClick(3)}
      />
    </div>
  );
};

export default HeaderBrandsNav;

// className="w-32 h-auto hover:scale-[1.1] transition-all"
