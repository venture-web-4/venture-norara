const { kakao } = window;
import { saveItem, loadItem } from './storage';

export function KakaoMapScript() {
  const container = document.getElementById('kakaoMap');
  const options = {
    center: new kakao.maps.LatLng(37.460716, 126.953223),
    level: 4,
  };
  const map = new kakao.maps.Map(container, options);
  map.setMaxLevel(5);
  map.setMinLevel(2);

  let image_locations = [
    new kakao.maps.LatLng(37.465994299722226, 126.9518158), //snu_1.jpg
    new kakao.maps.LatLng(37.46042489972223, 126.95679189972222), //snu_2.jpg
    new kakao.maps.LatLng(37.4655776, 126.9509797), //snu_3.jpg
    new kakao.maps.LatLng(37.461989, 126.9592526), //snu_4.jpg
    new kakao.maps.LatLng(37.44969849972222, 126.95250579972223), //snu_5.jpg
    new kakao.maps.LatLng(37.46616625058365, 126.954473689774), //snu_6.jpg
    new kakao.maps.LatLng(37.4611518, 126.952149), //snu_7.jpg
    new kakao.maps.LatLng(37.46800149972223, 126.95182189972222), //snu_8.jpg
    new kakao.maps.LatLng(37.458943599722225, 126.9502935), //snu_9.jpg
    new kakao.maps.LatLng(37.467597599722225, 126.9517802), //snu_10.jpg
    new kakao.maps.LatLng(37.4626164, 126.9579633), //snu_11.jpg
    new kakao.maps.LatLng(37.462783899722226, 126.95031409972222), //snu_12.jpg
    new kakao.maps.LatLng(37.459227599722226, 126.95132279972222), //snu_13.jpg
    new kakao.maps.LatLng(37.453320599722225, 126.95338089972222), //snu_14.jpg
    new kakao.maps.LatLng(37.460039972222226, 126.951564), //snu_15.jpg
  ];

  // draw rectangle on the center of the map
  const rectangle = new kakao.maps.Rectangle({
    strokeWeight: 1,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeStyle: 'solid',
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    bounds: new kakao.maps.LatLngBounds(
      new kakao.maps.LatLng(37.46, 126.95),
      new kakao.maps.LatLng(37.465, 126.955)
    ),
  });

  // set markers from image_locations
  for (let i = 0; i < image_locations.length; i++) {
    // let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png";
    // let imageSize = new kakao.maps.Size(40, 40);
    // let imageOption = {
    //   offset: new kakao.maps.Point(20, 40),
    // };
    // let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    // let marker = new kakao.maps.Marker({
    //   position: image_locations[i],
    //   image: markerImage,
    // });
    // set marker explaination
    let icon = new kakao.maps.CustomOverlay({
      content: `
        <div class="marker-content">
          <div class="marker-title">
            <span>${i + 1}</span>
          </div>
          </div> 
        </div>`,
      position: image_locations[i],
      map: map,
    });

    // marker.setMap(map);
  }

  let mouse_marker;
  kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
    let coord = mouseEvent.latLng;
    console.log(coord.toString());
    let stage = loadItem('geoStage');
    let index = parseInt(stage) === 0 ? 0 : parseInt(stage) - 1;
    let answer_coord = image_locations[index];
    console.log(image_locations[index]);

    var polyline = new kakao.maps.Polyline({
      path: [coord, answer_coord],
      strokeWeight: 2,
      strokeColor: '#FF00FF',
      strokeOpacity: 0.8,
      strokeStyle: 'dashed',
    });

    let score = polyline.getLength();
    console.log('길이 : ' + score);
    saveItem('geoScore', score);

    if (mouse_marker) mouse_marker.setMap(null);
    mouse_marker = new kakao.maps.Marker({
      map: map,
      position: coord,
    });
  });

  kakao.maps.event.addListener(map, 'mouseover', function (mouseEvent) {
    map.setCursor('crosshair');
  });
}
