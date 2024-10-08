import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import SliderProduct from "./SliderProduct";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="sliderArrow absolute top-[50%] mt-[-32px] right-[-64px] h-16 w-16"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="64px"
        viewBox="0 -960 960 960"
        width="64px"
        fill="#696969"
        className="transition-colors duration-200 ease-in-out hover:fill-[#aaa]"
      >
        <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="sliderArrow absolute top-[50%] mt-[-32px] left-[-50px] h-16 w-16"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="64px"
        viewBox="0 -960 960 960"
        width="64px"
        fill="#696969"
        className="transition-colors duration-200 ease-in-out hover:fill-[#aaa]"
      >
        <path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z" />
      </svg>
    </div>
  );
}

interface SimpleSliderProps {
  brand: any[];
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({ brand }) => {
  var settings = {
    swipeToSlide: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {brand.map((product, index) => (
        <SliderProduct
          key={index}
          image={product.image}
          title={product.title}
        />
      ))}
    </Slider>
  );
};

export default SimpleSlider;
