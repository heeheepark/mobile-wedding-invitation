import { useEffect, useRef } from "react";
import "../styles/common.css";
import "../styles/map.css";

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
    <div className="section">
      <h3>오시는 길</h3>
      <div className="place-info-wrap">
        <div>노비아갈라 전자관점 보타닉가든홀</div>
        <div>대구 북구 유통단지로 45 4-5층</div>
      </div>
      <div>
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
            src="/icons/navermap.png"
            alt="네이버지도"
            width="50px"
            height="50px"
          />
          <div>네이버지도</div>
        </a>
        <a
          className="kakao-mpa-wrap"
          href="https://map.kakao.com/?itemId=697291287"
          target="_blank"
        >
          <img
            src="/icons/kakaomap.png"
            alt="카카오맵"
            width="50px"
            height="50px"
          />
          <div>카카오맵</div>
        </a>
        <a
          className="t-map-wrap"
          href="https://map.kakao.com/?itemId=697291287"
          target="_blank"
        >
          <img src="/icons/tmap.svg" alt="티맵" width="50px" height="50px" />
          <div>티맵</div>
        </a>
      </div>
      <div className="route-info">
        <div className="subway-wrap d-none">
          <div className="transport_name">지하철</div>
          <div></div>
        </div>
        <div className="bus-wrap">
          <div className="transport_name">버스</div>
          <div>
            • 산격거평타운건너: 503, 706, 707
            <br />
            • 산격거평타운앞: 503, 706, 707, 937, 북구2
            <br />
            • 전자상가: 320, 326, 349, 653, 937, 북구2, 순환2, 순환2-1
            <br />
            • 산업용재관: 320, 326, 349, 653, 937, 북구2, 순환2, 순환2-1
            <br />
            • 전자관: 300, 304, 306, 320, 413, 653, 937, 북구2
            <br />
            • 텍스빌: 304, 306, 320, 413, 653, 937, 북구2
            <br />• 전기재료관1: 순환2, 순환2-1
          </div>
        </div>
        <div className="car-wrap">
          <div className="transport_name">자가용</div>
          <div>
            • 북대구IC
            <br />
            대구종합유통단지 방면 → 동서변 택지지구방면 고가도로 아래쪽에서
            우회전 → 산격대교 직진 → 한국통신건물에서 좌회전
            <br />
            • 시내방면
            <br />
            반월당, 대구역 → 신천변 신천동로를 타고 북쪽으로 달리면 쉽게
            유통단지 북쪽편으로 진입이 용이(추천진입로) <br />
            반월당, 대구역 → 도청교에서 우회전 다시 좌회전하여 직진, 경대교에서
            좌회전 다시 우회전하여 직진 → 경대북문 → 복현오거리에서 좌회전후
            오른쪽 한국통신건물 앞에서 우회전, 복현오거리에서 직진후
            좌회전(코스트코 가기전)
            <br />
            • 동대구역
            <br />
            동대구역 → 파티마병원 → 복현오거리 → 직진후 한국통신이 보이면
            우회전(산업용재관방향) 또는 45도 우회전후 좌회전
            <br />
            • 대구공항
            <br />
            공항 → 공항교(제 3아양교) 건너직진 → 복현오거리 → 직진후
            우회전(산업용재관방향)또는 45도 우회전후 좌회전
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
