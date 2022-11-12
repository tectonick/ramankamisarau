import React, { useState, useEffect } from "react";
import Api from "../Utility/api";
import FsLightbox from "fslightbox-react";
import Config from "../Config/config";

function Gallery() {
  const [GalleryImages, setGalleryImages] = useState([]);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  function isExternalLink(link){
    let regex =  /https?:\/\/.*/i;
    return regex.test(link);
  }

  useEffect(() => {
    Api.getGalleryImages().then((data) => {
      setGalleryImages(data.map(rawsource => isExternalLink(rawsource) ? rawsource : `http://${Config.Api.Host}:${Config.Api.Port}${rawsource}`));
    });
  }, []);
  return (
    <div className="gallery">
      <h2>GALLERY</h2>
      <div className="gallery-grid">
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={GalleryImages}
          slide={lightboxController.slide}
        />
        {GalleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            className="preview-image"
            loading="lazy"
            alt=""
            onClick={() => openLightboxOnSlide(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
