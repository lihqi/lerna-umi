import { useState, useRef } from 'react';

import VideoJS from './videoJS';
const url = `https://stream7.iqilu.com/10339/upload_transcode/202002/18/202002181038474liyNnnSzz.mp4`;
function VideoPlayer(props) {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: url,
        type: 'video/mp4',
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      // videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      // videojs.log('player will dispose');
    });
  };
  return <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />;
}
function App() {
  const [count, setCount] = useState(0);

  return <div>main</div>;
}

export default App;
