interface SliderProductProps {
    image: string;
    title: string;
}

const SliderProduct: React.FC<SliderProductProps> = ({ image, title }) => {
    return (
        <div className="h-[150px] flex flex-col items-center text-white mx-2 py-3 gap-2">
            <img src={image} alt={title} className="h-[100px] w-auto" />
            <p className="text-[#696969]">{title}</p>
        </div>
    )
}

export default SliderProduct;