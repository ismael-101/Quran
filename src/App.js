import React, { useState, useRef } from "react";
//Import Styles
import "./styles/app.scss";
// Adding Components
import Player from "./components/Player";
import Book from "./components/Book";
import Library from "./components/Library";
import Nav from "./components/Nav";
//Import Util
import format from "./data";
import { faL } from "@fortawesome/free-solid-svg-icons";

function App() {
  //Ref
  const audioRef = useRef(null);
  //State
  const [surs, setSurs] = useState(format());
  const [currentSur, setCurrentSur] = useState(surs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [surInfo, setSurInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // Calculate Percentage
    const roundedCurrent = Math.round(current);
    const roundedDuraction = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuraction) * 100);
    setSurInfo({
      ...surInfo,
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };
  const surEndHandler = async () => {
    let currentIndex = surs.findIndex(
      (sur) => sur.number === currentSur.number
    );
    await setCurrentSur(surs[(currentIndex + 1) % surs.length]);
    activeLibraryHandler(surs[(currentIndex + 1) % surs.length]);
    if (isPlaying) {
      setTimeout(() => {
        audioRef.current.play();
      }, 100);
    }
  };
  const activeLibraryHandler = (nextPrev) => {
    const newSurs = surs.map((sur) => {
      if (sur.number === nextPrev.number) {
        return {
          ...sur,
          active: true,
        };
      } else {
        return {
          ...sur,
          active: false,
        };
      }
    });
    setSurs(newSurs);
  };
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />

      <Book currentSur={currentSur} />
      <Player
        setSurInfo={setSurInfo}
        surInfo={surInfo}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSur={currentSur}
        surs={surs}
        setCurrentSur={setCurrentSur}
        setSurs={setSurs}
        activeLibraryHandler={activeLibraryHandler}
      />
      <Library
        libraryStatus={libraryStatus}
        isPlaying={isPlaying}
        audioRef={audioRef}
        surs={surs}
        setCurrentSur={setCurrentSur}
        setSurs={setSurs}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSur.url}
        onEnded={surEndHandler}
      ></audio>
    </div>
  );
}

export default App;
