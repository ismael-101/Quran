import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

function Player({
  setSurInfo,
  surInfo,
  audioRef,
  isPlaying,
  setIsPlaying,
  currentSur,
  setCurrentSur,
  surs,
  setSurs,
  activeLibraryHandler
}) {
 
  
  

  //Event Handlers
  const playSurHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  function getTime(time) {
    let totalNumberOfSeconds = Math.floor(time);
    const hours = parseInt(totalNumberOfSeconds / 3600);
    const minutes = parseInt((totalNumberOfSeconds - hours * 3600) / 60);
    const seconds = Math.floor(
      totalNumberOfSeconds - (hours * 3600 + minutes * 60)
    );
    const result =
      (hours < 10 ? "0" + hours : hours) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds);

    return result;
  }
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSurInfo({ ...surInfo, currentTime: e.target.value });
  };
  const skipTrackHandler = async (direction) => {
    let currentIndex = surs.findIndex(
      (sur) => sur.number === currentSur.number
    );
    if (direction === "skip-forward") {
      await setCurrentSur(surs[(currentIndex + 1) % surs.length]);
      activeLibraryHandler(surs[(currentIndex + 1) % surs.length])
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % surs.length === -1) {
        await setCurrentSur(surs[surs.length - 1]);
        activeLibraryHandler(surs[surs.length - 1])
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSur(surs[(currentIndex - 1) % surs.length]);
      activeLibraryHandler(surs[(currentIndex - 1) % surs.length])
    }
    if (isPlaying) audioRef.current.play();
  };
  // Add the styles
  const trackAnim = {
    transform: ` translateX(${surInfo.animationPercentage}%)`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(surInfo.currentTime)}</p>
        <div className="track">
          <input
            min={0}
            max={surInfo.duration}
            value={surInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{surInfo.duration ? getTime(surInfo.duration) : "00:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSurHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
}

export default Player;
