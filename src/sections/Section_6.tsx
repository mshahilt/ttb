import React from 'react'
import Title from '@/components/ui/Title'

const Section_6 = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center mb-20"
      style={{ backgroundImage: "url('/assets/images/section6.jpg')" }}
    >
      <div className="px-12 text-center mx-auto">
        <Title
          theme="dark"
          text="We’re not just in the travel business we’re in the business of making dreams a reality..!"
        />
      </div>
    </div>
  )
}

export default Section_6
