"use client"
import React, { useState } from 'react'
import Header from '@/components/layout/Header'
import { services } from '@/data/home'
import Image from 'next/image'
import Drawer from '@/components/layout/Drawer'

const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);
  console.log(modalOpen);
  
  return (
    <div className="relative w-full min-h-screen">
      <img
        src="/assets/images/main.jpg"
        alt="Main background"
        className="w-full h-full object-cover"
      />
      {modalOpen && <Drawer isOpen={modalOpen} setIsOpen={setModalOpen} />}
      <div className="absolute inset-0 bg-gradient-gray-black"/>

      <div className="absolute inset-0 flex flex-col z-10">
        <Header setModalOpen={setModalOpen}/>

        <div className="flex flex-col justify-center flex-grow px-4 sm:px-6 md:px-12 lg:px-20 text-white">
          <h1 className="text-left font-kugile text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight md:leading-[1.2] mb-4 sm:mb-6">
            Step Into a <br className="hidden sm:block" /> 
            <span className="sm:hidden">World of Discovery</span>
            <span className="hidden sm:inline">World of Discovery</span>
          </h1>

          <p className="text-left mt-4 sm:mt-6 max-w-xl md:max-w-2xl lg:max-w-3xl text-sm sm:text-base md:text-lg font-lufgaLight leading-relaxed">
            Since our inception in 2013, we have kept one vision at the heart of our proposition,
            to make the booking process smooth and seamless for our esteemed partners,
            to sell to their clients at an impressive gain. As a forward thinking destination
            management company, we pride ourselves on simplifying the lives of our partners.
            Your needs come first, always. This is why we work effortlessly, so you can focus on
            what matters, being the best in your region.
          </p>
        </div>


        <div className='flex flex-wrap justify-center sm:justify-around px-4 sm:px-6 py-4 sm:py-6 mb-8 sm:mb-12 text-white gap-x-4 gap-y-4 sm:gap-y-2 border-b border-white/30 mx-4 sm:mx-6'>
          {services.map((service) => {
            return (
              <div key={service.name} className='flex flex-col items-center min-w-[80px] sm:min-w-[100px]'>
                <Image 
                  height={42} 
                  width={42} 
                  src={service.icon} 
                  alt={service.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2"
                />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-center leading-tight">
                  {service.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Main