import NavButton from "./NavButton"
import { useLocation } from 'react-router-dom'


function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex gap-6">
      <NavButton title="About Us" link="/" styles={`${currentPath === '/' ? 'text-[#F5A64A] hover:text-[#F5A64A]' : 'text-inherit' }`}/>
      <NavButton title="Brands" link="/Brands" styles={`${currentPath === '/Brands' ? 'text-[#F5A64A] hover:text-[#F5A64A]' : 'text-inherit' }`}/>
      <NavButton title="Products" link="/Products" styles={`${currentPath === '/Products' ? 'text-[#F5A64A] hover:text-[#F5A64A]' : 'text-inherit' }`}/>
      <NavButton title="Our recipes" link="/Recipes" styles={`${currentPath === '/Recipes' ? 'text-[#F5A64A] hover:text-[#F5A64A]' : 'text-inherit' }`}/>
      <NavButton title="Contact us" link="/Contact" styles={`${currentPath === '/Contact' ? 'text-[#F5A64A] hover:text-[#F5A64A]' : 'text-inherit' }`}/>
    </div>
  )
}

export default NavBar