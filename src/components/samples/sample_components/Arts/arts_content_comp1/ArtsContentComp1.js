import React from "react";
import ArtsContent_1 from './ArtsContent_1'

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function ArtsContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <ArtsContent_1/>
      <CopyRights/>
    </div>
  );
}


