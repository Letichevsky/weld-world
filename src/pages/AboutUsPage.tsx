import React from 'react'

interface AboutUsPageProps {
  props?: string;
}

const AboutUsPage:React.FC<AboutUsPageProps> = ({props}) => {
  return (
    <div className='h-[500px] w-full bg-[#777]'>
      <h1>AboutUsPage</h1>
    </div>
  )
}

export default AboutUsPage