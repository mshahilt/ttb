import React from 'react'

type VacationPreviewProps = {
  image: string
  title: string
}

const VacationPreview: React.FC<VacationPreviewProps> = ({ image, title }) => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md px-6 py-3 text-white">
        <p className="text-2xl leading-relaxed">{title}</p>
      </div>
    </div>
  )
}

export default VacationPreview
