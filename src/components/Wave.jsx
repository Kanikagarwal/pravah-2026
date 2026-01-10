import React from 'react'

const Wave = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none opacity-50">
  {/* Wave moving normally (Left → Right) */}
  <svg
    className="relative block w-[200%] h-60 sm:h-96"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <path
      d="M0,40 C300,120 600,0 900,60 1200,80 1500,20 1800,40 L1800,120 L0,120 Z"
      fill="#2d201c"
    />
  </svg>

  {/* Same wave reversed using animation-direction */}
  {/* <svg
    className="absolute bottom-0 block w-[200%] h-40 animate-wave-reverse opacity-60"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <path
      d="M0,20 C300,80 600,10 900,50 1200,60 1500,30 1800,20 L1800,120 L0,120 Z"
      fill="#2d201c"
    />
  </svg> */}
</div>




  )
}

export default Wave
