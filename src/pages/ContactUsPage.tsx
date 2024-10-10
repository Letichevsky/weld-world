import brandsPageBG from "../assets/images/brandsPageBG.jpg";
import { useEffect } from "react";
import { scrollToTop } from "../utils/utils";

const ContactUsPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="w-full">
      <img
        src={brandsPageBG}
        alt="Trees and vally"
        className="object-cover w-full"
      />
      <div className="w-full">
        <div className="w-full max-w-[70svw] mx-auto h-[500px] flex justify-center items-center">
          <p className="text-[64px] text-[#696969] uppercase">Contact us</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
