import React from 'react'
import VacationPreview from '@/components/ui/VacationPreview'
import Title from '@/components/ui/Title'
import { section2 } from '@/data/home'

const Section_2 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mx-auto my-10 max-w-4xl">
        <Title text="Exclusivity with Simplicity" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {section2.map((item, i) => (
          <VacationPreview
            key={i}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Section_2