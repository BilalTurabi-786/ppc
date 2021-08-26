import React from "react";
import TheologyContent_1 from "./TheologyContent_1";

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function TheologyContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <TheologyContent_1/>
      <CopyRights/>
    </div>
  );
}


