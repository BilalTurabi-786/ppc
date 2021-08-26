import React from "react";
import GetSomeone from "./GetSomeone";
import Promosection from "./Promosection";
import WhatClientSay from "./WhatClientSay";
import ClientSection from "./ClientSection";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'

function ChemistryComp() {
  return (
    <div className="App">
           <HeaderSection/>
           <HeroSection/>
         <Promosection/>
        <GetSomeone/>
        <ClientSection/>
        <WhatClientSay/>
        <CopyRights/>
    </div>
  );
}

export default ChemistryComp;
