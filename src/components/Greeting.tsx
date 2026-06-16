import "../styles/common.css";
import "../styles/greeting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Greeting = () => {
  return (
    <div className="section">
      <div className="message-wrap">
        <div>
          설레는 첫 만남으로 시작된 인연이
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
          <span
            className="icon"
            onClick={() => (window.location.href = "tel:010-9665-0983")}
          >
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
          <span
            className="icon"
            onClick={() => (window.location.href = "tel:010-8611-7699")}
          >
            <FontAwesomeIcon icon={faPhone} size="xs" />
          </span>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primary btn-contact-parent"
          data-bs-toggle="modal"
          data-bs-target="#contactParentModal"
        >
          혼주에게 연락하기
        </button>

        <div
          className="modal fade"
          id="contactParentModal"
          aria-labelledby="contactParentModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title" id="contactParentModalLabel">
                  혼주에게 연락하기
                </div>
              </div>
              <div className="modal-body">
                <div>
                  <div className="name-info-wrap">
                    <span className="name-index groom">신랑 아버지</span>
                    <span className="name">김정도</span>
                    <div className="contact-btn-wrap">
                      <span
                        className="icon"
                        onClick={() =>
                          (window.location.href = "tel:010-1234-5678")
                        }
                      >
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                      <span
                        className="icon"
                        onClick={() =>
                          (window.location.href = "mailto:example@email.com")
                        }
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                  </div>
                  <div className="name-info-wrap">
                    <span className="name-index groom">신랑 어머니</span>
                    <span className="name">예분이</span>
                    <div className="contact-btn-wrap">
                      <span
                        className="icon"
                        onClick={() =>
                          (window.location.href = "tel:010-1234-5678")
                        }
                      >
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                      <span
                        className="icon"
                        onClick={() =>
                          (window.location.href = "mailto:example@email.com")
                        }
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="name-info-wrap">
                    <span className="name-index bride">신부 아버지</span>
                    <span className="name">박효주</span>
                    <div className="contact-btn-wrap">
                      <span
                        className="icon"
                        onClick={() =>
                          (window.location.href = "tel:010-1234-5678")
                        }
                      >
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                      <span
                        className="icon"
                        onClick={() =>
                          (window.location.href = "mailto:example@email.com")
                        }
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                  </div>
                  <div className="name-info-wrap">
                    <span className="name-index bride">신부 어머니</span>
                    <span className="name">이영선</span>
                    <div className="contact-btn-wrap">
                      <span
                        className="icon"
                        onClick={() =>
                          (window.location.href = "tel:010-1234-5678")
                        }
                      >
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                      <span
                        className="icon"
                        onClick={() =>
                          (window.location.href = "mailto:example@email.com")
                        }
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
