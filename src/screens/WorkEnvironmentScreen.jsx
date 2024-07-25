import React from 'react'
import WorkHero from '../component/ui/WorkEnvironment/WorkHero'
import Ambience from '../component/ui/WorkEnvironment/Ambience'
import Pictures from '../component/ui/WorkEnvironment/Pictures'
import TheMost from '../component/ui/WorkEnvironment/TheMost'
import Mission from '../component/ui/WorkEnvironment/mission'
import WorkEnvironment from '../component/ui/AboutUs/workEnvironment'

const WorkEnvironmentScreen = () => {
  return (
    <>
      <WorkHero />
      <WorkEnvironment />
      {/* <Ambience /> */}
      {/* <Pictures /> */}
      {/* <TheMost /> */}
      <Mission />
    </>
  )
}

export default WorkEnvironmentScreen