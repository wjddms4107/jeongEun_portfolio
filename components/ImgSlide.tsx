import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image: string | StaticImageData) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleOpenBox = (image: string | StaticImageData) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.documentElement.style.overflow = 'hidden';
  };

  const handleCloseBox = () => {
    setSelectedImage("");
    setIsModalOpen(false);
    document.documentElement.style.overflow = 'visible';
  };


  return (
    <motion.div>
      <Slider {...settings}>
        {imgArray?.map((image, index) => (
          <div key={index} onClick={() => handleOpenBox(image)}>
            <Image
              src={image}
              alt={alt}
              width={width}
              height={height}
              className={className}
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>

      <AnimatePresence>
        {isModalOpen ? (
          <motion.div
            className="fixed z-20 top-0 right-0 left-0 w-[100vw] h-full flex items-center justify-center m-auto"
            onClick={(e) => e.target === e.currentTarget && handleCloseBox()}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <motion.div>
              <Image
                src={selectedImage}
                alt={alt}
                width={width}
                height={height}
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
  </motion.div>
  )
}