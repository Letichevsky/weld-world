import divaOlivaOlives from '../assets/images/divaOlivaOlives.png'

const Product = () => {
    return (
        <div className="w-[200px] flex flex-col items-center gap-4 hover:shadow-md hover:scale-[1.1] py-4 transition-all">
            <img src={divaOlivaOlives} alt="Product name" className='h-[200px]'/>
            <p className='text-[#696969] uppercase'>Product name</p>
          </div>
    )
}

export default Product;