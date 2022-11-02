import React, { useState, useEffect } from "react";
import Api from "../Utility/api";

function Gallery() {
  const [GalleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    Api.getGalleryImages().then((data)=>{
      setGalleryImages(data);
    })
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
