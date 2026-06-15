import mainImg from "../assets/images/main_img.jpg";
import "../styles/common.css";
import "../styles/intro.css";

const Intro = () => {
  return (
    <div className="border-bottom info-wrap">
      <h1>
        2026<span>|</span>10<span>|</span>24
      </h1>
      <div id="imageWrap">
        <img
          className="img-fluid mb-5"
          src={mainImg}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h2>
        <span className="name groom-name">김시환</span>|
        <span className="name bride=name">박주희</span>
      </h2>
      <div id="infoWrap">
        <div>2026년 10월 24일 토요일 오전 11:30분</div>
        <div>노비아갈라 전자관점 보타닉가든홀</div>
      </div>
    </div>
  );
};

export default Intro;
