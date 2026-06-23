export {};

declare global {
  interface Window {
    kakao: any; // 지도 SDK (소문자)
    Kakao: any; // 공유 SDK (대문자)
  }
}
