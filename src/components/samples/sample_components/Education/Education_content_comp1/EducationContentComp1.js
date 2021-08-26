import React from "react";
import EducationContent_1 from "./EducationContent_1";

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function EducationContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <EducationContent_1/>
      <CopyRights/>
    </div>
  );
}


