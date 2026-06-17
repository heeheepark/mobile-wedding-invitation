import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKakaoTalk } from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import "../styles/common.css";
import "../styles/footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div>
      <div className="footer-wrap">
        <div className="bnt-wrap">
          <div className="share-btn-wrap">
            <FontAwesomeIcon icon={faKakaoTalk} />
            <span className="share-btn">카카오톡 공유하기</span>
          </div>
          <div className="copy-link-btn-wrap">
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
