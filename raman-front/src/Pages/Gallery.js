import React, { useState, useEffect } from "react";

function Gallery() {
  const [GalleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    setGalleryImages(["/img/test1.png", "/img/test2.png"]);
  }, []);
  return (
    <div className="Gallery">
      <h2>GALLERY</h2>
      <div className="gallery-container">
        {GalleryImages.map((image) => (
          <img src={image} alt="" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
