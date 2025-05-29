'use client';

import { useState } from 'react';
import Image from 'next/image';

const CardStack = ({ activeTab }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const getTopCardIndex = () => {
    switch (activeTab) {
      case 'Gift Cards': return 1;
      case 'Buy Gift Cards': return 3;
      case 'Check Balance': return 2;
      default: return 2;
    }
  };

  const topCardIndex = getTopCardIndex();

  const cardPositions = [
    {
      rotation: "rotate-[-12deg]",
      translateX: "translate-x-[-40%] sm:translate-x-[-60%] md:translate-x-[-90%]",
      translateY: "translate-y-4"
    },
    {
      rotation: "rotate-[-6deg]",
      translateX: "translate-x-[-20%] sm:translate-x-[-30%] md:translate-x-[-50%]",
      translateY: "translate-y-2"
    },
    {
      rotation: "rotate-0",
      translateX: "translate-x-0",
      translateY: "translate-y-0"
    },
    {
      rotation: "rotate-[6deg]",
      translateX: "translate-x-[20%] sm:translate-x-[30%] md:translate-x-[50%]",
      translateY: "translate-y-2"
    },
    {
      rotation: "rotate-[12deg]",
      translateX: "translate-x-[40%] sm:translate-x-[60%] md:translate-x-[90%]",
      translateY: "translate-y-4"
    }
  ];


  const allCards = [
    { src: "/Cards/card1.png" },
    { src: "/Cards/card2.png" },
    { src: "/Cards/card3.png" },
    { src: "/Cards/card4.png" },
    { src: "/Cards/card5.png" }
  ];

  const getZIndex = (index) => {
    if (index === topCardIndex) return 15;
    const distance = Math.abs(index - topCardIndex);
    return 10 - distance;
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-full w-full">
        <div className="relative h-[380px] sm:h-[420px] md:h-[460px] flex justify-center items-center">
          <div className="relative w-[320px] sm:w-[460px] md:w-[620px] h-full">
            {cardPositions.map((pos, index) => {
              const card = allCards[index];
              const zIndex = getZIndex(index);
              const isTopCard = index === topCardIndex;

              return (
                <div
                  key={index}
                  className={`
                    absolute w-36 h-56 sm:w-44 sm:h-64 md:w-52 md:h-96
                    top-0 md:left-50 left-25 -translate-y-1/2
                    ${pos.translateX} ${pos.translateY} ${pos.rotation}
                    rounded-2xl overflow-hidden shadow-xl
                    transition-transform duration-300 ease-in-out
                    ${hoveredCard === index ? 'scale-110' : isTopCard ? 'scale-105' : 'scale-100'}
                    cursor-pointer
                  `}
                  style={{ zIndex }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Image
                    src={card.src}
                    alt={`Card ${index + 1}`}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Text & Button */}
        <div className="text-center mt-4 md:mt-16 px-4">
          <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Can’t decide on the perfect set? Let them choose their own adventure with a LEGO® Gift Card.
            From epic builds to tiny treasures, they’ll get exactly what they love—when they want it.
            No stress, no guesswork, no expiration date. Just pure, build-it-your-way joy.
          </p>
          <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-15  md:px-35 rounded-full text-base md:text-lg transition-all duration-200">
            Make their Day
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardStack;
