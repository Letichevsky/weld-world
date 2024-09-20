import brandsPageBG from '../assets/images/brandsPageBG.jpg'
import divaOliva from '../assets/images/diva_oliva.svg'
import dreamValley from '../assets/images/Dream_Valley.svg'
import tropicLife from '../assets/images/tropic_life.svg'
import veld from '../assets/images/veld.svg'
import SimpleSlider from '../components/ProductsSlider'

interface BrandsPageProps {
  props?: string;
}

const BrandsPage: React.FC<BrandsPageProps> = ({props}) => {
  return (
    <div className='w-full'>
      <img src={brandsPageBG} alt="Trees and vally" className='object-cover w-full' />
      <div className="w-full">
        <div className="w-full max-w-[70svw] mx-auto flex flex-col items-center gap-8 py-[50px]">
          <img src={divaOliva} alt="Diva Oliva Logo" className='object-cover h-[190px] w-[400px]'/>
          <p className='text-[#696969] max-w-[750px]'>TM Diva Oliva presents a line of olive oil and olives, an affordable Mediterranean 
            delicacy, a tasty and healthy product. All products of the Diva Oliva brand are 
            manufactured at the best factories in Italy, Spain, Morocco, Greece and Turkey and 
            meet a high level of quality. A wide assortment of TM Diva Oliva can satisfy the 
            requests of the most demanding gourmet. <br/><br/>
          Perhaps, 100% natural unfiltered olive oil from Italy il Paesano TM Diva Olliva, which 
          literally means "country-side" deserves special attention. This is the best unfiltered 
          olive oil, the recipe of which was passed down from generation to generation by one of
           the oldest families in Italy. In 2011, the Veld World Itd company acquired the right 
           to the formulation and production of il Paesano butter. The olive pulp inherent in 
           this oll gives it a unique taste and aroma, making it even more useful!</p>
        </div>
        <div className="w-full bg-[#18713b] h-[150px]">
          <div className="h-full max-w-[70svw] bg-[#f7f7f7] mx-auto px-16">
            <SimpleSlider/>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full max-w-[70svw] mx-auto flex flex-col items-center pt-8 gap-4">
            <h3 className="text-[32px]">Our brands</h3>
            <p className="text-[#696969]">The company's distribution product portfolio includes the following brands:</p>
            <div className="w-full flex justify-between">
              <img src={divaOliva} alt="Diva Oliva logo" className='h-[200px] w-[200px]'/>
              <img src={dreamValley} alt="Dream Valley logo" className='h-[200px] w-[200px]'/>
              <img src={tropicLife} alt="Tropic Life logo" className='h-[200px] w-[200px]'/>
              <img src={veld} alt="Veld World logo" className='h-[200px] w-[200px]'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandsPage