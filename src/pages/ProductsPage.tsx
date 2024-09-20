import brandsPageBG from '../assets/images/brandsPageBG.jpg'
import Product from '../components/Product';

interface ProductsPageProps {
  props?: string;
}

const ProductsPage: React.FC<ProductsPageProps> = ({}) => {
  return (
    <div className="w-full">
      <img src={brandsPageBG} alt="Trees and vally" className='object-cover w-full' />
      <div className="w-full">
        <div className="w-full max-w-[70svw] mx-auto py-[50px] grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage

// className="w-full max-w-[70svw] mx-auto flex flex-row flex-wrap justify-around gap-6 py-[50px]"