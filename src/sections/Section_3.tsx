import React from 'react'
import Title from '@/components/ui/Title'
import Card from '@/components/ui/Card'
import { section3 } from '@/data/home'

const Section_3 = () => {
  let imageCounter = 0

  return (
    <div className="container mx-auto px-4 py-20">

      <div className="flex flex-wrap gap-4">

        <div className="flex-[1_1_calc(33.333%-1rem)] min-w-[250px] p-6 flex justify-center text-center">
          <Title text="Exclusivity with Simplicity" />
        </div>

        {section3.map((item, idx) => {
          const isImageItem = !!item.image
          let currentImageCounter = 0

          if (isImageItem) {
            imageCounter++
            currentImageCounter = imageCounter
          }

          return (
            <Card
              key={idx}
              title={item.title}
              description={item.description}
              image={item.image}
              isImageItem={isImageItem}
              imageCounter={currentImageCounter}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Section_3
