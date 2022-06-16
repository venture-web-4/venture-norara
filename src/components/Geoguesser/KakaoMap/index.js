import React, { useEffect } from 'react';

import KakaoMapScript from '../../../utils/GeoGuesser';

export default function KakaoMap() {
  useEffect(() => {
    KakaoMapScript();
  }, []);

  return (
    <div
      id='kakaoMap'
      style={{
        minWidth: '50vw',
        minHeight: '70vh',
        height: 'auto',
      }}
    ></div>
  );
}
