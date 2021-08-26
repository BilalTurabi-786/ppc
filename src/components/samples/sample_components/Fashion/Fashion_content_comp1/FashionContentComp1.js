import React from "react";
import FashionContent_1 from "./FashionContent_1";

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function FashionContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <FashionContent_1/>
      <CopyRights/>
    </div>
  );
}


