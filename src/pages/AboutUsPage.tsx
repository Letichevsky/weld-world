import aboutPageBG from "../assets/images/aboutPageBG.jpg";
import olives from "../assets/images/olives.jpeg";
import divaOlivaTin from "../assets/images/divaOlivaTin.png";
import { useEffect } from "react";
import { scrollToTop } from "../utils/utils";
interface AboutUsPageProps {
  props?: string;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ props }) => {
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
      <div className="w-full h-[50px] bg-[#0f4b27]">
        <div className="max-w-[70svw] h-full mx-auto pl-[32px]">
          <h1 className="text-white text-[32px]">
            A rainbow of flavors on your table.
          </h1>
        </div>
      </div>
      <div className="w-full py-[50px]">
        <div className="w-full max-w-[70svw] mx-auto flex relative">
          <div className="bg-[#f7f7f7] w-[360px] min-w-[360px] p-8 flex flex-col gap-6 ">
            <h2 className="text-[#0e4b25] text-[32px]">
              Our history <br /> and achievements
            </h2>
            <div className="h-[2px] w-[150px] bg-[#0e4b25]"></div>
            <p className="text-[#696969]">
              Established in 1996, a young and small company «Veld World» began
              to supply high quality and popular food products in Europe and
              Asian countries. Today Group of Companies «VELD» is one of the
              leading manufacturer and exporter of canned group of products and
              beverages mainly is coming from Philippines. Furthermore, it was
              discovered another line of work - the production of Private labels
              for retail networks. So company’s product portfolio includes
              brands such as: <br /> • Diva Oliva (olives, capers, sauces, olive
              oil & vinegar) <br /> • Dream Valley (olives, capers, canned
              fruits, vegetables, mushrooms, meat, sauces, pasta, noodles &
              chocolate-based spreads) <br /> • Tropic Life (canned fruits,
              juices, water & fish) <br /> • Veld World (coffee, tea, potato
              chips, grains, nuts & water)
            </p>
          </div>
          <img src={olives} alt="olives" className="h-[600px] object-cover" />
          <img
            src={divaOlivaTin}
            alt="Diva Oliva olives"
            className="absolute top-[-170px] left-[660px] h-[400px]"
          />
        </div>
      </div>
      <div className="w-full bg-[#18713b] pl-[50%]">
        <div className="h-full max-w-[650px] bg-[#0f4b27] py-6 px-16">
          <p className="text-white">
            • Group of Companies «VELD» works only with reliable farmers on the
            basis of direct contracts. <br /> • High-quality products and strict
            procedures of sorting and control. <br /> • Packing of the product
            meets all international standards. <br /> • Range of goods are
            always reconsidered and adapted to the needs and characteristics of
            the market. <br /> • We are always in the trend and follow the
            latest tendency.
            <br /> <br />{" "}
            <b>
              {" "}
              We will continue to try to take leadership on projects and
              creativity. And we will delight our customers with tasty and
              healthy new products in the future!
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
