import React from 'react'

const GiftCardSection = () => {
  const allCards = [
    { src: "/secCards/secCard1.png" },
    { src: "/secCards/secCard2.png" },
    { src: "/secCards/secCard3.png" },
    { src: "/secCards/secCard4.png" },
  ];
  return (
    <div className='flex-col'>
      <div className=' text-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:text-2xl'>
        <span className='md:text-4xl text-2xl'>

          Make Gifting as
        </span>
        <span className='text-red-500 face-font'>
          {" "}
          Fun as Building
        </span>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sha">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {allCards.map(({ src }, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 shadow-lg   shadow-gray-300 hover:shadow-2xl transition-shadow duration-300 cursor-pointer max-w-xs mx-auto md:w-[200px]"
            >
              <img
                src={src}
                alt={`Card ${index + 1}`}
                className="w-full h-70 object-cover rounded-3xl mb-3 "
              />
              <span className='ml-6'>View All {" "} {" >"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GiftCardSection
