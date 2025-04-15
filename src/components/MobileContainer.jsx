import React from 'react'

const MobileContainer = ({children,className}) => {
  return (
<div className={`scrollbar-w w-full md:w-[375px] md:h-[665px] md:border-8 rounded-2xl relative overflow-y-auto  mt-0 md:mt-10 pb-16 bg-[#F4F8FB] ${className}`}>
  {children}
</div>

  )
}

export default MobileContainer