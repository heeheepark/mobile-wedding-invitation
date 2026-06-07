import "../styles/common.css";
import "../styles/greeting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Greeting = () => {
  return (
    <div className="section">
      <div className="message-wrap">
        <div>
          설레는 첫 만남으로 시작된 인연이
          <br />
          9년의 시간을 함께 걸어와
          <br />
          소중한 결실을 맺게 되었습니다
        </div>
        <div>
          서로의 가장 좋은 친구이자
          <br />
          든든한 편이 되어온 저희가
          <br />
          이제 한 가정을 이루려 합니다
        </div>
        <div>
          귀한 걸음으로 오셔서
          <br />
          축복해 주시고 함께해 주세요
        </div>
      </div>
      <div className="contect-wrap">
        <div>
          <span className="name">김정도</span>
          <span>·</span>
          <span className="name">예분이</span>
          <span className="me-2" style={{ display: "inline-block" }}>
            의
          </span>
          <span style={{ display: "inline-block", width: "42px" }}>아들</span>
          <span className="name">시환</span>
          <span>
            <FontAwesomeIcon icon={faPhone} size="xs" />
          </span>
        </div>
        <div>
          <span className="name">박효주</span>
          <span>·</span>
          <span className="name">이영선</span>
          <span className="me-2" style={{ display: "inline-block" }}>
            의
          </span>
          <span style={{ display: "inline-block", width: "42px" }}>딸</span>
          <span className="name">주희</span>
          <span>
            <FontAwesomeIcon icon={faPhone} size="xs" />
          </span>
        </div>
      </div>
      <div>
        <div className="btn-contact-parent">혼주에게 연락하기</div>
      </div>
    </div>
  );
};

export default Greeting;
