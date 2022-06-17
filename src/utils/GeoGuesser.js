const { kakao } = window;

export default function KakaoMapScript() {
  const container = document.getElementById('kakaoMap');
  const options = {
    center: new kakao.maps.LatLng(37.460716, 126.953223),
    level: 4,
  };
  const map = new kakao.maps.Map(container, options);
}
