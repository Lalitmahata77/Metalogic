import React from 'react'
import CustomDevSection from './_components/CustomDevSection'
import TechStackSection from '../_components/TechStackSection'
import AgileMethodologySection from '../_components/AgileMethodologySection'
import CustomizationScability from '../_components/CustomizationScability'
import PartnershipSection from '../_components/PartnershipSection'
import FAQSection from '../_components/FAQSection'
import ProjectCTA from '../_components/ProjectCTA'

const DevPage = () => {
  return (
    <>
    <CustomDevSection/>
    <TechStackSection/>
    <AgileMethodologySection/>
    <CustomizationScability/>
    <PartnershipSection/>
    <FAQSection/>
    <ProjectCTA/>
    </>
  )
}

export default DevPage