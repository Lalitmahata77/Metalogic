import React from 'react'
import CustomSoftwareSection from './_components/customSoftwareSection'
import CustomSoftwareBenefits from './_components/CustomSoftwareBenefits'
import IndustryExperience from './_components/IndustryExperience'
import AgileMethodologySection from '../_components/AgileMethodologySection'
import CustomizationScability from '../_components/CustomizationScability'
import PartnershipSection from '../_components/PartnershipSection'
import FAQSection from '../_components/FAQSection'
import ProjectCTA from '../_components/ProjectCTA'

const page = () => {
  return (
    <>
    <CustomSoftwareSection/>
    <CustomSoftwareBenefits/>
    <IndustryExperience/>
    <AgileMethodologySection/>
    <CustomizationScability/>
    <PartnershipSection/>
    <FAQSection/>
    <ProjectCTA/>
    </>
  )
}

export default page