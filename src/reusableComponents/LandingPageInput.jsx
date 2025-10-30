import React from 'react'

const LandingPageInput = ({title}) => {
  return (
    <input className='border-b w-full border-gray-400 py-3 outline-0 placeholder:text-(--dark-green) placeholder:text-lg' type="text" placeholder={`${title}`} />
  )
}

export default LandingPageInput
