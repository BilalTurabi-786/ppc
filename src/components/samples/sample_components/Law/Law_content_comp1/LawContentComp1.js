import React from "react";
import LawContent_1 from "./LawContent_1";

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function LawContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <LawContent_1/>
      <CopyRights/>
    </div>
  );
}


