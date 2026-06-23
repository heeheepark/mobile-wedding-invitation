import { useState } from "react";
import "../styles/common.css";
import "../styles/gallery.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState("/images/24_1.webp");

  const images = [
    "/images/24_1.webp",
    "/images/22_1.webp",
    "/images/3_1.webp",
    "/images/17_1.webp",
    "/images/4_1.webp",
    "/images/23_1.webp",
    "/images/2_1.webp",
    "/images/1_1.webp",
    "/images/8_1.webp",
    "/images/9_1.webp",
    "/images/10_1.webp",
    "/images/12_1.webp",
    "/images/16_1.webp",
    "/images/21_1.webp",
    "/images/13_1.webp",
    "/images/20_1.webp",
  ];

  return (
    <motion.div
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3>갤러리</h3>

      <div
        className="gallery-main"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={import.meta.env.BASE_URL + selectedImage} alt="" />
      </div>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={8}
        className="gallery-thumb-swiper"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx} className="gallery-thumb-slide">
            <img
              src={import.meta.env.BASE_URL + src}
              alt=""
              onClick={() => setSelectedImage(src)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="modal fade" id="exampleModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {selectedImage && (
              <img
                src={import.meta.env.BASE_URL + selectedImage}
                alt=""
                style={{ width: "100%" }}
              />
            )}
          </div>
        </div>
      </div>

      <div className="gallery-info">사진을 누르면 확대할 수 있습니다</div> */}
    </motion.div>
  );
};

export default Gallery;
