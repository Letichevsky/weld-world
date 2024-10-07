interface ProductProps {
  image: string;
  title: string;
  onClick?: () => void;
}

const Product: React.FC<ProductProps> = ({ image, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-[200px] flex flex-col items-center gap-4 hover:shadow-md hover:scale-[1.1] py-4 transition-all cursor-pointer"
    >
      <img src={image} alt="Product name" className="h-[200px]" />
      <p className="text-[#696969] uppercase">{title}</p>
    </div>
  );
};

export default Product;
