import React from "react";
import CompScienceContent_1 from "./CompScienceContent_1";

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function ComputerScienceContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <CompScienceContent_1/>
      <CopyRights/>
    </div>
  );
}


