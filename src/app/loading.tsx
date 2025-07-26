import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen z-[9999]">
        <Image src="/images/loading.svg" alt="Loading..." width={50} height={50} />
    </div>
  )
}

export default loading