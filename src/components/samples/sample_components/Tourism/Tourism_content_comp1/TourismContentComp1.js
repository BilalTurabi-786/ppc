import React from "react";
import TourismContent_1 from "./TourismContent_1";

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function TourismContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <TourismContent_1/>
      <CopyRights/>
    </div>
  );
}


