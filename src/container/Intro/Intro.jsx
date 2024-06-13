import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();

    const [overlayVisible, setOverlayVisible] = useState(true);

    const toggleOverlay = () => {
        setOverlayVisible(!overlayVisible);
    };

  return (
    <div className="app__video" onMouseEnter={() => setOverlayVisible(true)} onMouseLeave={() => setOverlayVisible(false)}>
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      {overlayVisible && (
      <div className="app__video-overlay flex__center" onClick={toggleOverlay}>
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
      )}
    </div>
  );
};

export default Intro;