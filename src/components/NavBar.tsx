import NavButton from "./NavButton"

interface NavBarProps {
  className: string;
}

const NavBar:React.FC<NavBarProps> = ({ className }) => {

  return (
    <div className="flex gap-6">
      <NavButton title="About Us" link="/" className={className}/>
      <NavButton title="Brands" link="/Brands" className={className} />
      <NavButton title="Products" link="/Products" className={className} />
      <NavButton title="Our recipes" link="/Recipes" className={className} />
      <NavButton title="Contact us" link="/Contact" className={className} />
    </div>
  )
}

export default NavBar