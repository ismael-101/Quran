import React from "react";
function LibrarySur({
  sur,
  surs,
  setCurrentSur,
  id,
  number,
  audioRef,
  isPlaying,
  setSurs,

}) {
  const surSelectHandler = async () => {
    await setCurrentSur(sur);

    //Add Active State
    const newSurs = surs.map((sur) => {
      if (sur.number === number) {
       
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
    //check if the song is playing
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={surSelectHandler}
      className={`library-sur ${sur.active ? "selected" : ""}`}
    >
      <h3>{sur.name}</h3>
    </div>
  );
}

export default LibrarySur;
