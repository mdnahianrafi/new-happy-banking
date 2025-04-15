import React from 'react'

const MobileContainer = ({children}) => {
  return (
<div className="scrollbar-w w-full md:w-[375px] md:h-[665px] md:border-8 rounded-2xl relative overflow-y-auto  bg-[#F4F8FB]">
  {children}
</div>

  )
}

export default MobileContainer