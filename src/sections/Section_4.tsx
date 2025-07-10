import React from 'react'
import Title from '@/components/ui/Title'
import { section4 } from '@/data/home'

const Section_4 = () => {
    const repetedImages = [...section4, ...section4];
  return (
    <div className="max-w-screen bg-gradient-to-br from-stone-50 to-stone-100 py-16">
      <div className="w-full mx-auto">
        <div className="text-center mb-12">
          <Title text="What kind of trip are you looking for?" />
        </div>

        <div className="overflow-x-auto mb-12 no-scrollbar">
          <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
            {repetedImages.map((img, idx) => (
              <div
                key={idx}
                className="h-[250px] rounded-xl overflow-hidden transition-all duration-500 group relative flex-shrink-0"
              >
                <img
                  src={img}
                  alt={`trip-${idx}`}
                  className="h-full w-[200px] object-cover transition-all duration-500 group-hover:w-[400px]"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="px-8 py-3 border-2 border-stone-400 text-stone-700 font-medium rounded-full hover:bg-stone-400 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
            View All Journeys
          </button>
        </div>
      </div>
    </div>
  )
}

export default Section_4