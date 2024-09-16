import logo from '../assets/images/veld.svg'
import NavBar from './NavBar';

 function Header() {
  return (
    <div className="w-[70svw] h-[55px] bg-white fixed top-16 flex justify-between items-center px-6">
      <img src={logo} alt="weld logo" className='w-20'/>
      <NavBar/>
    </div>
  )
}

export default Header;