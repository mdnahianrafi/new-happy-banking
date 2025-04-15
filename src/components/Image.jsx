import React from 'react'

const Image = ({imgSrc,imgAlt,className}) => {
  return (
    <div>
          <img src={imgSrc} alt={imgAlt} className={`${className}`}/>
    </div>
  )
}

export default Image