import { useNavigate } from "react-router-dom";
import logo from "../assets/images/veld.svg";
import NavBar from "./NavBar";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="w-[70svw] h-[55px] left-1/2 -translate-x-1/2 bg-white fixed top-8 flex justify-between items-center px-6 z-50 shadow-md">
      <img
        src={logo}
        alt="weld logo"
        className="w-20 cursor-pointer"
        onClick={handleClick}
      />
      <NavBar className="headerNav" />
    </div>
  );
}

export default Header;
