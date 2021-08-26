import React from "react";
import CommerceContent_1 from "./CommerceContent_1";

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function CommerceContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <CommerceContent_1/>
      <CopyRights/>
    </div>
  );
}


