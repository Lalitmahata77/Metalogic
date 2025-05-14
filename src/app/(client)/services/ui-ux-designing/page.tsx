import React from 'react'
import CustomUiuxSection from './_components/CustomUiuxSection'
import TechStackSection from '../_components/TechStackSection'
import DesignExperienceSection from './_components/DesignExperienceSection'
import Offering from './_components/Offering'
import StructuredProcesses from './_components/StructuredProcesses'
import FAQSection from '../_components/FAQSection'
import ProjectCTA from '../_components/ProjectCTA'

const UiuxPage = () => {
  return (
    <>
    <CustomUiuxSection/>
    <DesignExperienceSection/>
   <main className="min-h-screen bg-gray-50">
      <Offering />
    </main>
<StructuredProcesses/>
    <TechStackSection/>
    <FAQSection/>
    <ProjectCTA/>

    </>
  )
}

export default UiuxPage