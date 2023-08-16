import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookQuran } from "@fortawesome/free-solid-svg-icons";

function Nav({ setLibraryStatus, libraryStatus }) {
  return (
    <nav>
      <h1>Quran</h1>
      <button
        onClick={() => {
          setLibraryStatus(!libraryStatus);
        }}
      >
        السُور
        <i> </i>
        <FontAwesomeIcon icon={faBookQuran} />
      </button>
    </nav>
  );
}

export default Nav;
