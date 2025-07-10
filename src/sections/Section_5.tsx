"use client"
import React, { useRef } from 'react'
import Title from '@/components/ui/Title'
import SectionPreview from '@/components/ui/SectionPreview'
import { section1 } from '@/data/home'

const Section_5 = () => {
  const repeatedSection = [...section1, ...section1]
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    console.log("function worked");
    const container = scrollRef.current
    if (!container) return

    const scrollAmount = 320 

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="max-w-screen py-16">
      <div className="w-full px-4 mb-12">
        <div className="mx-auto relative flex justify-between items-center">
          <div className="w-full md:max-w-3xl mx-auto text-center">
            <Title text="Discover our remarkable moments and places" />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex gap-3">
            <button onClick={() => scroll('left')}>
              <img src="/assets/icons/left.svg" alt="left arrow" />
            </button>
            <button onClick={() => scroll('right')}>
              <img src="/assets/icons/right.svg" alt="right arrow" />
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="overflow-x-auto no-scrollbar px-4 scroll-smooth"
      >
        <div className="flex gap-6 w-max pb-6">
          {repeatedSection.map((item, i) => (
            <div key={i} className="flex-shrink-0 w-1/6">
              <SectionPreview
                center={true}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section_5