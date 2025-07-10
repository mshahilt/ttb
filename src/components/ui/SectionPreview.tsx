import React from 'react';

type SectionPreviewProps = {
  image: string;
  title: string;
  description: string;
  center?: boolean
};

const SectionPreview: React.FC<SectionPreviewProps> = ({ image, title, description, center = false }) => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-gray-black" />
      <div className={`absolute text-white max-w-md px-6 ${
        center
          ? 'bottom-6 left-1/2 -translate-x-1/2 text-center'
          : 'bottom-6 left-6 text-left'
      }`}>
        <h1 className="text-5xl font-kugile mb-4">{title}</h1>
        <p className="text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default SectionPreview;
