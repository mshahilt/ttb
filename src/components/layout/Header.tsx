'use client'
import type { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import React from 'react'
import Marquee from "react-fast-marquee";

const items = [
  'Find New Beginnings',
  'Find Pause',
  'Find Balance',
  'Find Bliss',
  'Find Joy',
  'Find Clarity',
  'Find Meaning',
]

type HeaderProps = {
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

const Header: React.FC<HeaderProps> = ({ setModalOpen }) => {
  const repeatedItems = [...items, ...items]

  return (
    <div className="w-full">
      <div className="overflow-hidden border-b h-12 sm:h-16 md:h-20 border-white/30 bg-transparent relative">

        <Marquee className="absolute flex items-center h-full text-white text-center text-xs sm:text-sm md:text-base lg:text-lg">
          {repeatedItems.map((text, idx) => (
            <span key={idx} className="mx-4 sm:mx-6 md:mx-8 font-light">
              {text}
            </span>
          ))}
        </Marquee>
      </div>


      <div className="flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 md:px-8 lg:px-12">
        <Image
          onClick={() => setModalOpen(prev => !prev)}
          width={40}
          height={40}
          src="/assets/icons/hamburger.svg"
          alt="Menu"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 cursor-pointer hover:opacity-80 transition-opacity"
        />

        <Image
          width={140}
          height={140}
          src="/assets/icons/logo.svg"
          alt="Logo"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36"
        />

        <button className="bg-white/80 text-black font-medium px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 lg:px-8 lg:py-3 rounded-full hover:bg-white transition text-xs sm:text-sm md:text-base whitespace-nowrap">
          Book your Stay
        </button>
      </div>
    </div>
  )
}

export default Header