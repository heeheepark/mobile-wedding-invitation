import { useEffect, useRef } from "react";
import "../styles/common.css";
import "../styles/map.css";
import { motion } from "framer-motion";

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const kakao = window.kakao;
    const container = mapRef.current;

    const position = new kakao.maps.LatLng(
      35.906719271821075,
      128.60720515946466,
    );

    const options = {
      center: position,
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    // 마커 생성
    const marker = new kakao.maps.Marker({
      position,
    });

    // 지도에 마커 표시
    marker.setMap(map);
  }, []);

  return (
    <motion.div
      className="map-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3>오시는 길</h3>
      <div className="place-info-wrap">
        <div>노비아갈라 전자관점 보타닉가든홀</div>
        <div>대구 북구 유통단지로 45 4-5층</div>
      </div>
      <div className="map-container">
        <div
          ref={mapRef}
          style={{
            width: "100%",
            height: "320px",
          }}
        />
      </div>
      <div className="map-wrap">
        <a
          className="naver-map-wrap"
          href="https://map.naver.com/p/entry/place/12870274"
          target="_blank"
        >
          <img
            src={import.meta.env.BASE_URL + "/icons/navermap.png"}
            alt="네이버지도"
          />
          <span>네이버지도</span>
        </a>
        <a
          className="kakao-mpa-wrap"
          href="https://map.kakao.com/?itemId=697291287"
          target="_blank"
        >
          <img
            src={import.meta.env.BASE_URL + "/icons/kakaomap.png"}
            alt="카카오맵"
          />
          <span>카카오맵</span>
        </a>
        <a
          className="t-map-wrap"
          href="https://poi.tmobiweb.com/app/share/position?contents=dHlwZT0yJnBrZXk9ODY4NjU5NjAwJnBvaUlkPTg2ODY1OTYmcG9pTmFtZT0lRUIlODUlQjglRUIlQjklODQlRUMlOTUlODQlRUElQjAlODglRUIlOUQlQkMlRUMlOUIlQTglRUIlOTQlQTklMjAlRUMlQTAlODQlRUMlOUUlOTAlRUElQjQlODAlRUMlQTAlOTAmY2VudGVyWD00NjI5OTAzJmNlbnRlclk9MTI5MjUzMyZ0aW1lPTIwMjYlRUIlODUlODQlMjA2JUVDJTlCJTk0JTIwMTYlRUMlOUQlQkMlMjAyMTo3JnRlbD0wNTMtNjA0LTE5MDAmYWRkcj0lRUIlOEMlODAlRUElQjUlQUMlMjAlRUIlQjYlODElRUElQjUlQUMlMjAlRUMlOUMlQTAlRUQlODYlQjUlRUIlOEIlQTglRUMlQTclODAlRUIlQTElOUMlMjA0NQ==&tailParam=%7B%7D"
          target="_blank"
        >
          <img src={import.meta.env.BASE_URL + "/icons/tmap.svg"} alt="티맵" />
          <span>티맵</span>
        </a>
      </div>
    </motion.div>
  );
};

export default Map;
