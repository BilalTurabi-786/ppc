import React from "react";
import DesignContent_1 from "./DesignContent_1";

import HeroSection from "./HeroSection";
import HeaderSection from "./HeaderSection";
import CopyRights from './CopyRights';

export default function DesignContentComp1() {
  return (
    <div className="App">
      <HeaderSection/>
      <HeroSection/>
      <DesignContent_1/>
      <CopyRights/>
    </div>
  );
}


