import React, { useEffect, useState } from "react";

function Book({ currentSur }) {
  const [cover, setCover] = useState([]);

  const images = [
    "https://plus.unsplash.com/premium_photo-1677231559663-b9f6a7c33c77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVyYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1589186222872-418c38954ca3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHF1cmFufGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1609665662783-ac637fd38733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHF1cmFufGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1580220810949-e7ddee6a4954?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cXVyYW58ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1587617425953-9075d28b8c46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cXVyYW58ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1632054632263-a5d21f13b600?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHF1cmFufGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60",
  ];
  let randomNm = Math.floor(Math.random() * images.length);
  useEffect(() => {
    setCover(images[randomNm]);
  }, [currentSur]);
  return (
    <div className="sur-container">
      <div className="img">
      <img alt="" src={cover} />
      </div>

      <h3>بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h3>
      <h2>{currentSur.name}</h2>
    </div>
  );
}

export default Book;
