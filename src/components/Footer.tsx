import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKakaoTalk } from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import "../styles/common.css";
import "../styles/footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  const handleKakaoShare = () => {
    window.Kakao.Share.sendCustom({
      templateId: 134549, // 카카오 디벨로퍼스에서 발급된 템플릿 ID
    });
  };

  const onCopy = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert("링크가 복사되었습니다.");
  };

  return (
    <motion.div>
      <div className="footer-wrap">
        <div className="bnt-wrap">
          <div
            className="share-btn-wrap"
            onClick={() => {
              handleKakaoShare();
            }}
          >
            <FontAwesomeIcon icon={faKakaoTalk} />
            <span className="share-btn">카카오톡 공유하기</span>
          </div>
          <div
            className="copy-link-btn-wrap"
            onClick={() => {
              onCopy();
            }}
          >
            <FontAwesomeIcon icon={faCopy} />
            <span className="copy-link-btn">링크 복사하기</span>
          </div>
        </div>
        <div className="credits">Developed by jooheepark</div>
      </div>
    </motion.div>
  );
};

export default Footer;
