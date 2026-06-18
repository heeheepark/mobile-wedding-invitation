import "../styles/common.css";
import "../styles/intro.css";

const Intro = () => {
  return (
    <div className="border-bottom">
      <div className="main-image-wrap">
        <img
          className="img-fluid mb-5"
          src={import.meta.env.BASE_URL + "images/main.webp"}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div>
        <div className="name-wrap">
          <span className="groom-name">김시환</span>
          <span>|</span>
          <span className="bride-name">박주희</span>
        </div>
        <div className="info-wrap">
          <div>2026년 10월 24일 토요일 오전 11시 30분</div>
          <div>노비아갈라 전자관점 보타닉가든홀</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
