import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface NavButtonProps {
  title: string;
  link: string;
  styles?: string;
  className: string;
}

const NavButton: React.FC<NavButtonProps> = ({
  title,
  link,
  styles,
  className,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleClick = () => {
    navigate(link);
  };

  const isAboutUsSelected = currentPath === link;
  const isOtherSelected = currentPath !== "/" && currentPath.startsWith(link);
  const selectCheck =
    title === "About Us" ? isAboutUsSelected : isOtherSelected;

  return (
    <button
      className={`${className} font-medium uppercase transition ease-in-out duration-100 ${
        selectCheck ? "selectedNav" : ""
      } ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default NavButton;
