import aboutPageBG from "../assets/images/aboutPageBG.jpg";
import olives from "../assets/images/olives.jpeg";
import divaOlivaTin from "../assets/images/divaOlivaTin.png";
interface AboutUsPageProps {
  props?: string;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ props }) => {
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
              Veld World was founded on December 9, 2005 in the UK, starting its
              activity as a supplier of high-quality grocery group of goods.
              Canned pineapples and other fruits Tropic Life Dream Valley,
              olives and olives Diva Oliva and Dream Valley, as well as olive
              oil Diva Oliva - have already become loved by a huge number of
              con-sumers. Every day we try to develop the markets of Europe and
              Asia as much as possible. Striving to satisfy the taste needs of
              all our customers, we have expanded our range of meat and fish
              pre-serves. Also: chips, coffee, tea, nuts, water, fruit juices.
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
            We constantly strive to ensure the highest quality of our products
            and maintain a high professional level of our services so that you
            can enjoy truly delicious and high-quality products that you love so
            much. Veld World is maximally focused on satisfying the needs of its
            customers. We are always ready for cooperation and devel-opment,
            promptly responding to changes in the market situation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
