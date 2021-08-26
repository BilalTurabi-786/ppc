import React from 'react'
import OurService from './OurServices'
import HeroSection from './HeroSection'
import HeaderSection from './HeaderSection'
import CopyRights from './CopyRights'
import PurpleHeader from './PurpleHeader'


export default function ReviewComp(){

    return(
        <>
        <PurpleHeader/>
        <HeaderSection/>
        <HeroSection/>
        <OurService/>
        <CopyRights/>
        </>
    )
}