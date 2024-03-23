import Painting1 from "../assets/pearl-earring.png";
import Painting2 from "../assets/jane-grey.png";
import Painting3 from "../assets/narcissus.png";
import Painting4 from "../assets/dante.png";
import Painting5 from "../assets/saint-jerome.png";
import Painting6 from "../assets/golias-head.png";
import Painting7 from "../assets/meninas.png";
import Painting8 from "../assets/john-baptist.png";
import Painting9 from "../assets/anatomy.png";
import Painting10 from "../assets/incredulity.png";
import Painting11 from "../assets/judith-holofernes.png";
import Painting12 from "../assets/saint-matthew.png";
import Painting13 from "../assets/entombment.png";
import Painting14 from "../assets/milkmaid.png";
import Painting15 from "../assets/procuress.png";
import Painting16 from "../assets/anthony.png";
import Painting17 from "../assets/cathedral.png";
import Painting18 from "../assets/balbi.png";
import Painting19 from "../assets/cupid.png";
import Painting20 from "../assets/eldest.png";
import Painting21 from "../assets/agnus.png";
import Painting22 from "../assets/crucifixion.png";
import Painting23 from "../assets/hercules.png";
import Painting24 from "../assets/saint-francis.png";
import Painting25 from "../assets/suzanna.png";
import Painting26 from "../assets/magdalene.png";
import Painting27 from "../assets/slaying.png";
import Painting28 from "../assets/lute-player.png";
import Painting29 from "../assets/magi.png";
import Painting30 from "../assets/still-life.png";
import Painting31 from "../assets/denial.png";
import Painting32 from "../assets/patiente.png";

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
