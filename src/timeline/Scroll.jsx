import React, { useEffect, useState } from "react";
import { Element } from "react-scroll/modules";

function Scroll() {
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const artistSection = document.querySelectorAll(".artist-section");
      artistSection.forEach((section) => {
        const content = section.getBoundingClientRect();
        if (content.top >= 0 && content.bottom <= window.innerHeight) {
          setArtist(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Element name="artist1" className="artist-section">
        <h2>teste titulo1</h2>
      </Element>
      <Element name="artist2" className="artist-section">
        <h2>teste titulo2</h2>
      </Element>
    </div>
  );
}

export default Scroll;
