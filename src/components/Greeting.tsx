import "../styles/common.css";
import "../styles/greeting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Greeting = () => {
  const message =
    "설레는 첫 만남으로 시작된 인연이\n소중한 결실을 맺게 되었습니다.\n\n서로의 가장 좋은 친구이자\n든든한 편이 되어온 저희가\n이제 한 가정을 이루려 합니다.\n\n귀한 걸음으로 오셔서\n저희의 새로운 시작을\n따뜻하게 축복해 주세요.";

  const groomList = {
    self: {
      fullName: "김시환",
      firstName: "시환",
      lastName: "김",
      phone: "010-9665-0983",
    },
    father: {
      name: "김정도",
      phone: "010-7138-0983",
    },
    mother: {
      name: "예분이",
      phone: "010-4767-0983",
    },
  };

  const brideList = {
    self: {
      fullName: "박주희",
      firstName: "주희",
      lastName: "박",
      phone: "010-8611-7699",
    },
    father: {
      name: "박효주",
      phone: "010-9141-7699",
    },
    mother: {
      name: "이영선",
      phone: "010-4164-7699",
    },
  };

  const peopleList = [groomList, brideList];

  return (
    <motion.div
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="title">Wedding Invitation</h3>
      <div className="message-wrap">
        <div className="message animate__animated animate__fadeInUp ">
          {message}
        </div>
      </div>
      <div className="contect-wrap">
        {peopleList.map((type) => {
          const self = type.self;
          const father = type.father;
          const mother = type.mother;

          return (
            <div key={self.fullName}>
              <span className="name">{father.name}</span>
              <span>·</span>
              <span className="name">{mother.name}</span>
              <span className="me-2" style={{ display: "inline-block" }}>
                의
              </span>
              <span style={{ display: "inline-block", width: "42px" }}>
                {type == groomList ? "아들" : "딸"}
              </span>
              <span className="name">{self.firstName}</span>
              <span
                className="icon"
                onClick={() => (window.location.href = `tel:${self.phone}`)}
              >
                <FontAwesomeIcon icon={faPhone} size="xs" />
              </span>
            </div>
          );
        })}
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
                {peopleList.map((type) => {
                  const role = type == groomList ? "groom" : "bride";
                  const roleName = role == "groom" ? "신랑" : "신부";
                  const father = type.father;
                  const mother = type.mother;

                  return (
                    <div key={type.self.fullName}>
                      <div className="name-info-wrap">
                        <span className={`name-index ${role}`}>
                          {roleName} 아버지
                        </span>
                        <span className="name">{father.name}</span>
                        <div className="contact-btn-wrap">
                          <span
                            className="icon"
                            onClick={() =>
                              (window.location.href = `tel:${father.phone}`)
                            }
                          >
                            <FontAwesomeIcon icon={faPhone} />
                          </span>
                          <span
                            className="icon"
                            onClick={() =>
                              (window.location.href = `sms:${father.phone}`)
                            }
                          >
                            <FontAwesomeIcon icon={faEnvelope} />
                          </span>
                        </div>
                      </div>
                      <div className="name-info-wrap">
                        <span className={`name-index ${role}`}>
                          {roleName} 어머니
                        </span>
                        <span className="name">{mother.name}</span>
                        <div className="contact-btn-wrap">
                          <span
                            className="icon"
                            onClick={() =>
                              (window.location.href = `tel:${mother.phone}`)
                            }
                          >
                            <FontAwesomeIcon icon={faPhone} />
                          </span>
                          <span
                            className="icon"
                            onClick={() =>
                              (window.location.href = `sms:${mother.phone}`)
                            }
                          >
                            <FontAwesomeIcon icon={faEnvelope} />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
    </motion.div>
  );
};

export default Greeting;
