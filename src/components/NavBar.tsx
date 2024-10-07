import { useState, useRef } from "react";
import NavButton from "./NavButton";
import HeaderBrandsNav from "./HeaderBrandsNav";

interface NavBarProps {
  className: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const [showBrandsNav, setShowBrandsNav] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowBrandsNav(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowBrandsNav(false);
    }, 300);
  };

  return (
    <div className="h-full flex gap-6">
      <NavButton title="About Us" link="/veld_world/" className={className} />
      <div
        className="h-full relative flex justify-center items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavButton
          title="Brands"
          link="/veld_world/brands"
          className={className}
        />
        {/* Отображение HeaderBrandsNav */}
        {showBrandsNav && (
          <div
            className="absolute top-full left-0"
            onMouseEnter={handleMouseEnter}
          >
            <HeaderBrandsNav />
          </div>
        )}
      </div>
      <NavButton
        title="Products"
        link="/veld_world/products"
        className={className}
      />
      <NavButton
        title="Our recipes"
        link="/veld_world/recipes"
        className={className}
      />
      <NavButton
        title="Contact us"
        link="/veld_world/contact"
        className={className}
      />
    </div>
  );
};

export default NavBar;
