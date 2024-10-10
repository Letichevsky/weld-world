import NavButton from "./NavButton";

interface NavBarProps {
  className: string;
}

const FooterNavBar: React.FC<NavBarProps> = ({ className }) => {
  return (
    <div className="h-full flex gap-6">
      <NavButton title="About Us" link="/" className={className} />
      <NavButton title="Brands" link="/brands" className={className} />
      <NavButton title="Products" link="/products" className={className} />
      <NavButton title="Our recipes" link="/recipes" className={className} />
      <NavButton title="Contact us" link="/contact" className={className} />
    </div>
  );
};

export default FooterNavBar;
