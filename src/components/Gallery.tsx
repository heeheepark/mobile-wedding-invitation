import "../styles/common.css";
import "../styles/gallery.css";

const Gallery = () => {
  const images = [
    "/images/KakaoTalk_20260605_153414406.jpg",
    "/images/KakaoTalk_20260605_153414406_01.jpg",
    "/images/KakaoTalk_20260605_153414406_02.jpg",
    "/images/KakaoTalk_20260605_153414406_03.jpg",
    "/images/KakaoTalk_20260605_153414406_04.jpg",
    "/images/KakaoTalk_20260605_153414406_05.jpg",
    "/images/KakaoTalk_20260605_153414406_06.jpg",
    "/images/KakaoTalk_20260605_153414406_07.jpg",
    "/images/KakaoTalk_20260605_153414406_08.jpg",
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
