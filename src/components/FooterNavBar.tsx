import NavButton from "./NavButton";

interface NavBarProps {
  className: string;
}

const FooterNavBar: React.FC<NavBarProps> = ({ className }) => {
  return (
    <div className="h-full flex gap-6">
      <NavButton title="About Us" link="/veld_world/" className={className} />
      <NavButton
        title="Brands"
        link="/veld_world/brands"
        className={className}
      />
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

export default FooterNavBar;
