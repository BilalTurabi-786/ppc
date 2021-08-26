import React from 'react'
import OurTeam from './OurTeam'
import HeaderSection from './HeaderSection'
import HeroSection from './HeroSection'
import ExpertsDiagram from './ExpertsDiagram'
import CopyRights from './CopyRights'
import PurpleHeader from './PurpleHeader'


export default function OurExpert(){

    return(
        <>
        <PurpleHeader/>
        <HeaderSection/>
          <HeroSection/>
          <OurTeam/>
          <ExpertsDiagram/>
          <CopyRights/>
        </>
    )
}