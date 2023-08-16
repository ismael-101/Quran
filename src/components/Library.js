import React from "react";
import LibrarySur from "./LibrarySur";
// import { library } from "@fortawesome/fontawesome-svg-core";

const Library = ({
  libraryStatus,
  surs,
  setCurrentSur,
  audioRef,
  isPlaying,
  setSurs,
  activeLibraryHandler,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>السُور</h2>
      <div className="library-surahs">
        {surs.map((sur) => (
          <LibrarySur
            surs={surs}
            setCurrentSur={setCurrentSur}
            sur={sur}
            number={sur.number}
            key={sur.number}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSurs={setSurs}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
