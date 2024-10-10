import aboutPageBG from "../assets/images/aboutPageBG.jpg";
import { useEffect } from "react";
import { scrollToTop } from "../utils/utils";

const ContactUsPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="w-full">
      <img
        src={aboutPageBG}
        alt="our products"
        className="object-cover w-full max-h-[350px]"
      />
      <div className="w-full h-[50px] bg-[#0f4b27]"></div>
      <div className="w-full">
        <div className="w-full max-w-[70svw] mx-auto pb-16 pt-12">
          <div className="min-w-[400px] px-8 mb-8 ml-0 flex flex-col items-start">
            <p className="mb-4 text-[24px] text-[#696969] font-bold canSelect">
              Head Office - United Kingdom
            </p>
            <div className=" text-[#696969] text-[20px] canSelect">
              Veld World (UK) Limited
            </div>
            <div className=" text-[#696969] text-[20px] canSelect">
              Address: 65 Compton Street, London EC1V 0BN, UK
            </div>
            <a
              href="tel:+447833632036"
              className="text-[#696969] text-[20px] canSelect"
            >
              Phone: +44 7833 632036
            </a>
            <div className="flex">
              <p className="text-[#696969] text-[20px] mr-1 canSelect">
                Email:{" "}
              </p>
              <a
                className="text-[#6F85C3] text-[20px] decoration-[inherit] canSelect"
                href="mailto:info@veldworld.com"
              >
                info@veldworld.com
              </a>
            </div>
          </div>
          <div className="min-w-[400px] px-8 mb-8 ml-0 flex flex-col items-start">
            <p className="mb-4 text-[24px] text-[#696969] font-bold canSelect">
              Representative Office in Europe - Slovakia
            </p>
            <div className=" text-[#696969] text-[20px] canSelect">
              VELD EU, s.r.o.
            </div>
            <div className=" text-[#696969] text-[20px] canSelect">
              Address: Strojárska 3998, Snina 069 01, Slovakia
            </div>
            <a
              href="tel:+421911547855"
              className="text-[#696969] text-[20px] canSelect"
            >
              Phone: +421 911 547 855
            </a>
            <div className="flex">
              <p className="text-[#696969] text-[20px] mr-1 canSelect">
                Email:{" "}
              </p>
              <a
                className="text-[#6F85C3] text-[20px] decoration-[inherit] canSelect"
                href="mailto:sk@veldworld.com"
              >
                sk@veldworld.com
              </a>
            </div>
          </div>
          <div className="min-w-[400px] px-8 ml-0 flex flex-col items-start">
            <p className="mb-4 text-[24px] text-[#696969] font-bold canSelect">
              Representative Office in Asia - Philippines
            </p>
            <div className=" text-[#696969] text-[20px] canSelect">
              Consumer Insights, Inc.
            </div>
            <div className=" text-[#696969] text-[20px] canSelect">
              Address: 129 Bayabong, Muntinlupa, 1780 Metro Manila, Philippines
            </div>
            <a
              href="tel:+639178470357"
              className="text-[#696969] text-[20px] canSelect"
            >
              Phone: +63 917 847 0357
            </a>
            <div className="flex">
              <p className="text-[#696969] text-[20px] mr-1 canSelect">
                Email:{" "}
              </p>
              <a
                className="text-[#6F85C3] text-[20px] decoration-[inherit] canSelect"
                href="mailto:info@veldworld.com"
              >
                ph@veldworld.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
