import React from 'react'

type CardProps = {
  image?: string
  title: string
  description: string
  isImageItem?: boolean
  imageCounter?: number
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  isImageItem = false,
  imageCounter = 0,
}) => {
  let widthClass = 'flex-[1_1_calc(33.333%-1rem)]'

  if (isImageItem) {
    widthClass = imageCounter === 1
      ? 'flex-[1_1_calc(33.333%-1rem)]'
      : 'flex-[1_1_calc(66.666%-1rem)]'
  }

  return (
    <div className={`${widthClass} min-w-[250px]`}>
      <div className="w-full overflow-hidden rounded-md shadow-md h-full bg-white">
        {image && (
          <div className="h-[300px] w-full">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="px-6 py-4 text-gray-900">
          <h1 className="text-3xl font-kugile mb-2">{title}</h1>
          <p className="text-base font-lufgaLight leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
