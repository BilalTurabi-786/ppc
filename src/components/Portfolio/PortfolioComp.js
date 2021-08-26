import React from 'react'
import PortfolioCards from './PortfolioCards'
import HeaderSection from './HeaderSection'
import CopyRights from './CopyRights'
import PurpleHeader from './PurpleHeader'

export default function PortfolioComp(){

    return(
        <>
        <PurpleHeader/>
        <HeaderSection/>
        <PortfolioCards/>
        <CopyRights/>
        </>
    )
}