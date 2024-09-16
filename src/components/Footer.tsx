import NavBar from "./NavBar";


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
                <div className="h-[55px] min-w-[70svw] bg-[#0f4b25] flex items-center pl-16">
                <NavBar className='footerNav'/>
                </div>
            </div>
        </div>
    )
}

export default Footer;