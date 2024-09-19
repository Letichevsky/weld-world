import NavButton from "./NavButton"

interface NavBarProps {
  className: string;
}

const NavBar:React.FC<NavBarProps> = ({ className }) => {

  return (
    <div className="flex gap-6">
      <NavButton title="About Us" link="/veld_world/" className={className}/>
      <NavButton title="Brands" link="/veld_world/Brands" className={className} />
      <NavButton title="Products" link="/veld_world/Products" className={className} />
      <NavButton title="Our recipes" link="/veld_world/Recipes" className={className} />
      <NavButton title="Contact us" link="/veld_world/Contact" className={className} />
    </div>
  )
}

export default NavBar