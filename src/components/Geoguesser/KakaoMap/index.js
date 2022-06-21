import React, { useEffect } from 'react';

import { KakaoMapScript } from '../../../utils/GeoGuesser';

export default function KakaoMap() {
  useEffect(() => {
    KakaoMapScript();
  }, []);

  return (
    <div
      id='kakaoMap'
      style={{
        minWidth: '30vw',
        minHeight: '70vh',
        height: 'auto',
        borderRadius: '10px',
      }}
    ></div>
  );
}
