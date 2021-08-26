import React from'react'
import HomeworkHelp from './HomeworkHelp'
import ClientSection from './ClientSection'
import CardSection from './CardSection'
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import CopyRights from './CopyRights'

export default function MathComp()
{
    return(
        <>
        <HeaderSection/>
         <HeroSection/>
        <CardSection/>
        <ClientSection/>
        <HomeworkHelp/>
        <CopyRights/>
        </>
    )
}