import React, { useState } from 'react';

const ButtonGroup = () => {
  const [activeButton, setActiveButton] = useState('Gift Cards');

  const buttons = ['Gift Cards', 'Buy Gift Cards', 'Check Balance'];

  return (
    <div className="flex justify-center face-font bg-white rounded-full shadow-md overflow-hidden">
      {buttons.map((button) => (
        <button
          key={button}
          className={`
                flex-grow
                py-2
                px-4
                text-sm
                font-medium
                text-gray-700
                hover:bg-gray-100
                focus:outline-none
                transition-colors
                duration-200
                ${activeButton === button ? 'bg-blue-200 text-blue-800' : ''}
              `}
          onClick={() => setActiveButton(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;