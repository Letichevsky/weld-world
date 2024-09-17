import divaOlivaOlives from '../assets/images/divaOlivaOlives.png'

const Recipe = () => {
    return (
        <div className="h-[220px] w-[250px] flex flex-col items-center ml-0">
            <img src={divaOlivaOlives} alt="Product name" className='h-[200px]'/>
            <p className='text-[#696969] uppercase'>Product name</p>
          </div>
    )
}

export default Recipe;