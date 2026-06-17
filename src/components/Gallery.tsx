import { useState } from "react";
import "../styles/common.css";
import "../styles/gallery.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState("");

  const images = [
    "/images/1_1.webp",
    "/images/2_1.webp",
    "/images/3_1.webp",
    "/images/4_1.webp",
    "/images/23_1.webp",
    "/images/24_1.webp",
    "/images/5_1.webp",
    "/images/6_1.webp",
    "/images/7_1.webp",
    "/images/8_1.webp",
    "/images/9_1.webp",
    "/images/10_1.webp",
    "/images/11_1.webp",
    "/images/12_1.webp",
    "/images/13_1.webp",
    "/images/14_1.webp",
    "/images/15_1.webp",
    "/images/16_1.webp",
    "/images/17_1.webp",
    "/images/18_1.webp",
    "/images/19_1.webp",
    "/images/20_1.webp",
    "/images/21_1.webp",
    "/images/22_1.webp",
    "/images/25_1.webp",
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

      <div className="gallery-wrapper">
        <Swiper
          modules={[Grid, Pagination, Navigation]}
          slidesPerView={3}
          grid={{
            rows: 3,
            fill: "row",
          }}
          spaceBetween={10}
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                className="gallery-image"
                onClick={() => setSelectedImage(src)}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="modal fade" id="exampleModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {selectedImage && (
              <img src={selectedImage} alt="" style={{ width: "100%" }} />
            )}
          </div>
        </div>
      </div>

      <div className="gallery-info">사진을 누르면 확대할 수 있습니다</div>
    </motion.div>
  );
};

export default Gallery;
