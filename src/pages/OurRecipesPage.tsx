import brandsPageBG from '../assets/images/brandsPageBG.jpg'
import Product from '../components/Product';
import SimpleSlider from '../components/ProductsSlider';

interface OurRecipesPageProps {
  props?: string;
}

const OurRecipesPage: React.FC<OurRecipesPageProps> = ({}) => {
  return (
    <div className="w-full">
      <img src={brandsPageBG} alt="Trees and vally" className='object-cover w-full' />
      <div className="w-full">
        <div className="w-full max-w-[70svw] mx-auto flex flex-row flex-wrap justify-around gap-6 py-[50px]">

          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>

        </div>
      </div>
      <div className="w-full bg-[#18713b] h-[150px]">
          <div className="h-full max-w-[70svw] bg-[#f7f7f7] mx-auto px-16">
            <SimpleSlider/>
          </div>
        </div>
    </div>
  )
}

export default OurRecipesPage