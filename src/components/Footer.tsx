import NavBar from "./NavBar";
import './Footer.css'

function goToVlArt() {
    window.open('https://vl-art.com', '_blank')
}

const Footer = () => {
    return (
        <div className="w-full py-[50px] overflow-hidden">
            <div className="w-full max-w-[70svw] h-full mx-auto flex">
                <div className="min-w-[400px] px-8 ml-0 flex flex-col items-start">
                    <div className="mb-2 text-[#222] uppercase">Contact</div>
                    <div className="mb-2 text-[#222]">Company</div>
                    <div className="mb-4 max-w-[180px] text-[#696969]">Veld World (UK) Limited, 65 Compton Street, London EC1V 0BN, United Kingdom.</div>
                    <a href="tel:+84412345678" className="text-[#696969]">+844 123 456 78</a>
                    <a href="mailto:youremail@domain.com" className="text-[#696969]">youremail@domain.com</a>
                    <a href="https://www.yourdomain.com" className="text-[#79cba8]">www.yourdomain.com</a>
                </div>
                <div className="flex flex-col">
                <div className="h-[55px] min-w-[100svw] bg-[#0f4b25] flex items-center pl-16">
                <NavBar className='footerNav'/>
                </div>
                <div className="vlArtLogo flex items-center w-[200px] mt-[50px]" onClick={goToVlArt} >
                    <p className="mr-4 text-[#18713b] pt-[21px]">coded by</p>
                    <svg
              className="svg-logo"
              width="84"
              height="108"
              viewBox="0 0 168 217"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.46429 2L43 107.019M63.5 54.5095L84 2M103.036 2V107.019M122.071 107.019H166M2 133.274H164.536M23.9643 160.987L33.4821 187.242M43 213.497L33.4821 187.242M33.4821 187.242H13.7143M3.46429 213.497H4.92857M63.5 160.987C63.5 160.987 103.036 158.945 103.036 174.114C103.036 189.284 78.1429 187.242 63.5 186.63L103.036 213.497M123.536 160.987H144.036V214.955M163.071 160.987H164.536M62.0357 213.497H63.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;