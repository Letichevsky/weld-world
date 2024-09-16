import React from 'react'

interface BrandsPageProps {
  props?: string;
}

const BrandsPage: React.FC<BrandsPageProps> = ({props}) => {
  return (
    <div className='h-[500px] w-full bg-[#777]'>
      <h1>BrandsPage</h1>
    </div>
  )
}

export default BrandsPage