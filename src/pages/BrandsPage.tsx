import { useState } from "react";
import brandsPageBG from "../assets/images/brandsPageBG.jpg";
import divaOliva from "../assets/images/diva_oliva.svg";
import dreamValley from "../assets/images/Dream_Valley.svg";
import tropicLife from "../assets/images/tropic_life.svg";
import veld from "../assets/images/veld.svg";
import SimpleSlider from "../components/ProductsSlider";

const brandsData = [
  {
    logo: divaOliva,
    title: "Diva Oliva",
    description: `TM Diva Oliva presents a line of olive oil and olives, an affordable
            Mediterranean delicacy, a tasty and healthy product. All products of
            the Diva Oliva brand are manufactured at the best factories in
            Italy, Spain, Morocco, Greece and Turkey and meet a high level of
            quality. A wide assortment of TM Diva Oliva can satisfy the requests
            of the most demanding gourmet. 

            Perhaps, 100% natural unfiltered olive oil from Italy il Paesano TM
            Diva Olliva, which literally means "country-side" deserves special
            attention. This is the best unfiltered olive oil, the recipe of
            which was passed down from generation to generation by one of the
            oldest families in Italy. In 2011, the Veld World Itd company
            acquired the right to the formulation and production of il Paesano
            butter. The olive pulp inherent in this oll gives it a unique taste
            and aroma, making it even more useful!`,
  },
  {
    logo: dreamValley,
    title: "Dream Valley",
    description: `Dream Valley presents a line of olive oil and olives, an affordable
            Mediterranean delicacy, a tasty and healthy product. All products of
            the Diva Oliva brand are manufactured at the best factories in
            Italy, Spain, Morocco, Greece and Turkey and meet a high level of
            quality. A wide assortment of TM Diva Oliva can satisfy the requests
            of the most demanding gourmet. 

            Perhaps, 100% natural unfiltered olive oil from Italy il Paesano TM
            Diva Olliva, which literally means "country-side" deserves special
            attention. This is the best unfiltered olive oil, the recipe of
            which was passed down from generation to generation by one of the
            oldest families in Italy. In 2011, the Veld World Itd company
            acquired the right to the formulation and production of il Paesano
            butter. The olive pulp inherent in this oll gives it a unique taste
            and aroma, making it even more useful!`,
  },
  {
    logo: tropicLife,
    title: "Tropic Life",
    description: `Tropic Life presents a line of olive oil and olives, an affordable
            Mediterranean delicacy, a tasty and healthy product. All products of
            the Diva Oliva brand are manufactured at the best factories in
            Italy, Spain, Morocco, Greece and Turkey and meet a high level of
            quality. A wide assortment of TM Diva Oliva can satisfy the requests
            of the most demanding gourmet. 

            Perhaps, 100% natural unfiltered olive oil from Italy il Paesano TM
            Diva Olliva, which literally means "country-side" deserves special
            attention. This is the best unfiltered olive oil, the recipe of
            which was passed down from generation to generation by one of the
            oldest families in Italy. In 2011, the Veld World Itd company
            acquired the right to the formulation and production of il Paesano
            butter. The olive pulp inherent in this oll gives it a unique taste
            and aroma, making it even more useful!`,
  },
  {
    logo: veld,
    title: "Veld World",
    description: `Veld World presents a line of olive oil and olives, an affordable
            Mediterranean delicacy, a tasty and healthy product. All products of
            the Diva Oliva brand are manufactured at the best factories in
            Italy, Spain, Morocco, Greece and Turkey and meet a high level of
            quality. A wide assortment of TM Diva Oliva can satisfy the requests
            of the most demanding gourmet. 

            Perhaps, 100% natural unfiltered olive oil from Italy il Paesano TM
            Diva Olliva, which literally means "country-side" deserves special
            attention. This is the best unfiltered olive oil, the recipe of
            which was passed down from generation to generation by one of the
            oldest families in Italy. In 2011, the Veld World Itd company
            acquired the right to the formulation and production of il Paesano
            butter. The olive pulp inherent in this oll gives it a unique taste
            and aroma, making it even more useful!`,
  },
];

const BrandsPage: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState(brandsData[0]);

  const handleBrandClick = (brand: (typeof brandsData)[number]) => {
    setSelectedBrand(brand);

    const element = document.getElementById("aboutBrand");
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full">
      <img
        src={brandsPageBG}
        alt="Trees and vally"
        className="object-cover w-full"
      />
      <div id="aboutBrand" className="w-full">
        <div className="w-full max-w-[70svw] mx-auto flex flex-col items-center gap-8 py-[50px]">
          <img
            src={selectedBrand.logo}
            alt={`${selectedBrand.title} Logo`}
            className="object-cover h-[190px] w-auto"
          />
          <p className="text-[#696969] max-w-[750px]">
            {selectedBrand.description}
          </p>
        </div>
        <div className="w-full bg-[#18713b] h-[150px]">
          <div className="h-full max-w-[70svw] bg-[#f7f7f7] mx-auto px-16">
            <SimpleSlider />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full max-w-[70svw] mx-auto flex flex-col items-center pt-8 gap-4">
            <h3 className="text-[32px]">Our brands</h3>
            <p className="text-[#696969]">
              The company's distribution product portfolio includes the
              following brands:
            </p>
            <div className="w-full flex justify-between">
              {brandsData.map((brand, index) => (
                <img
                  key={index}
                  src={brand.logo}
                  alt={`${brand.title} logo`}
                  className="h-[200px] w-[200px] hover:scale-[1.1] transition-all"
                  onClick={() => handleBrandClick(brand)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;
