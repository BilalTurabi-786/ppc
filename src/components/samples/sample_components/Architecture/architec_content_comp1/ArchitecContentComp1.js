import React from "react";
import ArchitectureContent_1 from './ArchitectureContent_1';

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function ArchitecContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <ArchitectureContent_1/>
      <CopyRights/>
    </div>
  );
}


