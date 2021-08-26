import React from "react";
import GetSomeone from "./GetSomeone";
import WhatClientSay from "./WhatClientSay";
import ClientSection from "./ClientSection";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'

function ProgrammingComp() {
  return (
    <div className="App">
      <HeaderSection/>
       <HeroSection/>
      <WhatClientSay/>
      <ClientSection/>
      <GetSomeone/>
      <CopyRights/>
    </div>
  );
}

export default ProgrammingComp;
