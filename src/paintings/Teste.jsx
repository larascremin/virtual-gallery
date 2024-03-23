import Painting1 from "../assets/pearl-earring.jpg";
import Painting2 from "../assets/jane-grey.jpg";
import Painting3 from "../assets/narcissus.jpg";
import Painting4 from "../assets/dante.jpg";
import Painting5 from "../assets/saint-jerome.jpg";
import Painting6 from "../assets/golias-head.jpg";
import Painting7 from "../assets/meninas.jpg";
import Painting8 from "../assets/john-baptist.jpg";
import Painting9 from "../assets/anatomy.jpg";
import Painting10 from "../assets/incredulity.jpg";
import Painting11 from "../assets/judith-holofernes.jpg";
import Painting12 from "../assets/saint-matthew.jpg";
import Painting13 from "../assets/entombment.jpg";
import Painting14 from "../assets/milkmaid.jpg";
import Painting15 from "../assets/procuress.jpg";
import Painting16 from "../assets/anthony.jpg";
import Painting17 from "../assets/cathedral.jpg";
import Painting18 from "../assets/balbi.jpg";
import Painting19 from "../assets/cupid.jpg";
import Painting20 from "../assets/eldest.jpg";
import Painting21 from "../assets/agnus.jpg";
import Painting22 from "../assets/crucifixion.jpg";
import Painting23 from "../assets/hercules.jpg";
import Painting24 from "../assets/saint-francis.jpg";
import Painting25 from "../assets/suzanna.jpg";
import Painting26 from "../assets/magdalene.jpg";
import Painting27 from "../assets/slaying.jpg";
import Painting28 from "../assets/lute-player.jpg";
import Painting29 from "../assets/magi.jpg";
import Painting30 from "../assets/still-life.jpg";
import Painting31 from "../assets/denial.jpg";
import Painting32 from "../assets/patiente.jpg";

import Filter from "./Filter";
import PaintingList from "./PaintingList";
import React, { useState } from "react";

function Teste() {
  const [filteredPaintings, setFilteredPaintings] = useState([]);
  const paintings = [
    {
      name: "Girl with a Pearl Earring",
      creator: "Johannes Vermeer",
      year: 1665,
      image: Painting1,
    },
    { name: "Pearl", creator: "johanes", year: 1652, image: Painting1 },
    { name: "Pearl", creator: "johanes", year: 1652, image: Painting1 },
    { name: "Pearl", creator: "johanes", year: 1652, image: Painting1 },
    { name: "Pearl", creator: "johanes", year: 1652, image: Painting1 },
  ];

  return (
    <>
      <div>
        <Filter
          paintings={paintings}
          setFilteredPaintings={setFilteredPaintings}
        />
      </div>
      <div className="gallery">
        <PaintingList
          paintings={
            filteredPaintings.length > 0 ? filteredPaintings : paintings
          }
        />
      </div>
    </>
  );
}

export default Teste;
