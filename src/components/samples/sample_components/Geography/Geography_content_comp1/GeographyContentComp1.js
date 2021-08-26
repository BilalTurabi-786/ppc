import React from "react";
import GeographyContent_1 from "./GeographyContent_1";

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function GeographyContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <GeographyContent_1/>
      <CopyRights/>
    </div>
  );
}


