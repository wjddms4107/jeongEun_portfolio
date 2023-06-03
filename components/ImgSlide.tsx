import Image, { StaticImageData } from "next/image"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IImgSlideProps {
  settings: any;
  imgArray: Array<string | StaticImageData>;
  alt: string;
  width?: number;
  height?: number;
  className: string;
}

export default function ImgSlide({settings, imgArray, alt, width, height, className}: IImgSlideProps) {


  return (
    <Slider {...settings}>
      {imgArray.map((image, index) => (
        <div key={index}>
          {typeof image === "string" ? (
            <Image src={image} alt={alt} layout="responsive"  width={width} height={height} className={className} priority={index === 0}/>
          ) : (
            <Image src={image.src} alt={alt} layout="responsive" width={width} height={height} className={className} priority={index === 0} />
          )}
        </div>
      ))}
    </Slider>
  )
}