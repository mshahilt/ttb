import Title from '@/components/ui/Title'
import React from 'react'
import SectionPreview from '@/components/ui/SectionPreview'
import { section1 } from '@/data/home'

const Section_1 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mx-auto my-10 max-w-4xl">
        <Title text="Tourists Travel Bureau Journeys' World" />
        <p className="font-lufgaLight text-lg mt-8">
            Tourists Travel Bureau is dedicated to providing spectacular wholesale services throughout the
            GCC and beyond. Our journey towards becoming a leading B2B wholesaler is rooted in
            foundations of reliability, professionalism, speed, and most importantly, trust.
        </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {section1.map((item, i) => (
          <SectionPreview
            key={i}
            description={item.description}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
    </div>
  )
}
export default Section_1