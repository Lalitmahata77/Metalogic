import React from 'react'
import CustomWebSection from './_components/CustomWwbSection'
import TechStackSection from '../_components/TechStackSection'
import QualityAssurancePage from './_components/QualityAssurancePage'
import AgileMethodologySection from '../_components/AgileMethodologySection'
import CustomizationScability from '../_components/CustomizationScability'
import PartnershipSection from '../_components/PartnershipSection'
import FAQSection from '../_components/FAQSection'
import ProjectCTA from '../_components/ProjectCTA'

const WebDevelopment = () => {
  return (
    <>
    <CustomWebSection/>
    <TechStackSection/>
    <QualityAssurancePage/>
    <AgileMethodologySection/>
    <CustomizationScability/>
    <PartnershipSection/>
    <FAQSection/>
    <ProjectCTA/>
    </>
  )
}

export default WebDevelopment