import "../styles/common.css";
import "../styles/gallery.css";

const Gallery = () => {
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
    // "/images/8_1.webp",
    // "/images/9_1.webp",
    // "/images/10_1.webp",
    // "/images/11_1.webp",
    // "/images/12_1.webp",
    // "/images/13_1.webp",
    // "/images/14_1.webp",
    // "/images/15_1.webp",
    // "/images/16_1.webp",
    // "/images/17_1.webp",
    // "/images/18_1.webp",
    // "/images/19_1.webp",
    // "/images/20_1.webp",
    // "/images/21_1.webp",
    // "/images/22_1.webp",
    // "/images/25_1.webp",
  ];

  return (
    <div className="section">
      <h3>갤러리</h3>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt="" className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
