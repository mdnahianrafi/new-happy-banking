import React from 'react'

import MobileContainer from '../components/MobileContainer'
import DashboardStickyNav from '../components/DashboardStickyNav'


const Dashboard = () => {
  return (
    <>
 <div className="container mx-auto">
 <div className="md:flex md:justify-center ">
<MobileContainer>
<DashboardStickyNav className="md:top-[89%] lg:top-[78%] xl:top-[68%]  2xl:top-[52%] h-14 md:w-[356px] screen-3xl-custom"/>
</MobileContainer>
      </div>
 
 </div>
      
    </>
 
  )
}

export default Dashboard