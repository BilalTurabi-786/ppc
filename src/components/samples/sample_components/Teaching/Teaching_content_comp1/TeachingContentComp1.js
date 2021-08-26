import React from "react";
import TeachingContent_1 from "./TeachingContent_1";

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function TeachingContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <TeachingContent_1/>
      <CopyRights/>
    </div>
  );
}


