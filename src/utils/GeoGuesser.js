const { kakao } = window;
import { saveItem, loadItem } from './storage';

export function KakaoMapScript(reset = false) {
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
    new kakao.maps.LatLng(37.44969849972222, 126.95250579972223), //snu_4.jpg
    new kakao.maps.LatLng(37.46616625058365, 126.954473689774), //snu_5.jpg
    new kakao.maps.LatLng(37.4611518, 126.952149), //snu_6.jpg
    new kakao.maps.LatLng(37.467597599722225, 126.9517802), //snu_7.jpg
    new kakao.maps.LatLng(37.4626164, 126.9579633), //snu_8.jpg
    new kakao.maps.LatLng(37.462783899722226, 126.95031409972222), //snu_9.jpg
    new kakao.maps.LatLng(37.459227599722226, 126.95132279972222), //snu_10.jpg
    new kakao.maps.LatLng(37.453320599722225, 126.95338089972222), //snu_11.jpg
    new kakao.maps.LatLng(37.460039972222226, 126.951564), //snu_12.jpg
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
  // for (let i = 0; i < image_locations.length; i++) {
  //   let icon = new kakao.maps.CustomOverlay({
  //     content: `
  //       <div class="marker-content">
  //         <div class="marker-title">
  //           <span>${i + 1}</span>
  //         </div>
  //         </div>
  //       </div>`,
  //     position: image_locations[i],
  //     map: map,
  //   });
  // }

  let mouse_marker;
  kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
    let coord = mouseEvent.latLng;
    let stage = loadItem('geoStage');
    let index = parseInt(stage) === 0 ? 0 : parseInt(stage) - 1;
    let answer_coord = image_locations[index];

    var polyline = new kakao.maps.Polyline({
      path: [coord, answer_coord],
      strokeWeight: 2,
      strokeColor: '#FF00FF',
      strokeOpacity: 0.8,
      strokeStyle: 'dashed',
    });

    let score = polyline.getLength();
    saveItem('geoScore', score);

    if (mouse_marker) mouse_marker.setMap(null);
    mouse_marker = new kakao.maps.Marker({
      map: map,
      position: coord,
    });
  });

  const button = document.getElementById('geoguesser-submit');

  // if button is clicked
  let icon;
  button.addEventListener('click', () => {
    // delay for 0.1 second, and execute the following code

    const showAnswer = () => {
      let stage = parseFloat(loadItem('geoStage'));
      if ((stage * 2) % 2 === 1) {
        if (icon) icon.setMap(null);
        icon = new kakao.maps.CustomOverlay({
          content: `
              <div class="marker-content" style=
              "
              align-items: center;
              display: flex;
              flex-direction: column;
              ">
                <img src='img/marker.png' alt="marker" width="30px" height="46px" />
                <div class="marker-title"
                  <span style="color: green ; font-size: 24px;">
                    정답
                  </span>
                </div>
              </div>`,
          position: image_locations[parseInt(stage) - 1],
          map: map,
        });
        map.setCenter(image_locations[parseInt(stage) - 1]);
      } else {
        icon.setMap(null);
        mouse_marker.setMap(null);
      }
    };

    setTimeout(function () {
      showAnswer();
    }, 100);
  });

  kakao.maps.event.addListener(map, 'mouseover', function (mouseEvent) {
    map.setCursor('crosshair');
    // let stage = parseFloat(loadItem('geoStage'));
    // console.log("stagestagestage",stage)
    // if(stage*2%2 !== 0) {
    //   let icon = new kakao.maps.CustomOverlay({
    //         content: `
    //           <div class="marker-content">
    //             <div class="marker-title">
    //               <span>정답</span>
    //             </div>
    //             </div>
    //           </div>`,
    //         position: image_locations[stage],
    //         map: map,
    //       });
    // }
  });
}
