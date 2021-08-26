import React from "react";
import BiologyContent_1 from './BiologyContent_1'

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function BiologyContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <BiologyContent_1/>
      <CopyRights/>
    </div>
  );
}


