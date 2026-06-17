import "../styles/common.css";
import "../styles/route.css";
import { motion } from "framer-motion";

const Route = () => {
  return (
    <motion.div
      className="route-wrap"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="route-info">
        <div className="subway-wrap d-none">
          <div className="transport-name">지하철</div>
          <div></div>
        </div>
        <div className="bus-wrap">
          <div className="transport-name">🚌 버스</div>
          <div>
            <div>
              <span>산격거평타운건너</span> 503, 706, 707
            </div>
            <div>
              <span>산격거평타운앞</span> 503, 706, 707, 937, 북구2
            </div>
            <div>
              <span>전자상가</span> 320, 326, 349, 653, 937, 북구2, 순환2,
              순환2-1
            </div>
            <div>
              <span>산업용재관</span> 320, 326, 349, 653, 937, 북구2, 순환2,
              순환2-1
            </div>
            <div>
              <span>전자관</span> 300, 304, 306, 320, 413, 653, 937, 북구2
            </div>
            <div>
              <span>텍스빌</span> 304, 306, 320, 413, 653, 937, 북구2
            </div>
            <div>
              <span>전기재료관1</span> 순환2, 순환2-1
            </div>
          </div>
        </div>
        <div className="car-wrap">
          <div className="transport-name">🚗 자가용</div>
          <div className="route-description">
            <div>
              <span>북대구IC</span>
              <br />
              대구종합유통단지 방면 〉 동서변 택지지구방면 고가도로 아래쪽에서
              우회전 〉 산격대교 직진 〉 한국통신건물에서 좌회전
            </div>
            <div>
              <span>시내방면</span>
              <br />
              반월당, 대구역 〉 신천변 신천동로를 타고 북쪽으로 달리면 쉽게
              유통단지 북쪽편으로 진입이 용이(추천진입로) <br />
              반월당, 대구역 〉 도청교에서 우회전 다시 좌회전하여 직진,
              경대교에서 좌회전 다시 우회전하여 직진 〉 경대북문 〉
              복현오거리에서 좌회전후 오른쪽 한국통신건물 앞에서 우회전,
              복현오거리에서 직진후 좌회전(코스트코 가기전)
            </div>
            <div>
              <span>동대구역</span>
              <br />
              동대구역 〉 파티마병원 〉 복현오거리 〉 직진후 한국통신이 보이면
              우회전(산업용재관방향) 또는 45도 우회전후 좌회전
            </div>
            <div>
              <span>대구공항</span>
              <br />
              공항 〉 공항교(제 3아양교) 건너직진 〉 복현오거리 〉 직진후
              우회전(산업용재관방향)또는 45도 우회전후 좌회전
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Route;
