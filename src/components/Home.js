import React from 'react';
// import s from '../styles/home.style';

import ImageMapper from 'react-image-mapper';
import map from '../assets/map';

export default function Home() {
  const url = 'src/assets/player-sheet.png';

  return (
    <div>
      <ImageMapper
        src={url}
        map={map}
        fillColor={'#B4E3DE'}
        width={1157}
        height={1157}
      />
    </div>
  );
}
