'use client';
const BlueButtonStrip = ({ activeTab, setActiveTab }) => {
  const tabs = ['Gift Cards', 'Buy Gift Cards', 'Check Balance'];

  return (
    <div className="bg-white py-6 shadow-sm border-b border-gray-100 font-press-start-2p">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 bg-blue-300 p-2 sm:p-3  rounded-xl  max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            ${activeTab === tab
                  ? 'bg-blue-700 text-white shadow-md'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }
          `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Heading */}
        <div className="text-center face-font px-2">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug">
            A{' '}
            <span className="inline-block outline outline-amber-300 bg-amber-50 text-amber-300 px-3 sm:px-4 py-1.5 rounded-full transform -rotate-1 shadow-sm">
              Gift
            </span>{' '}
            as Creative as They Are
          </h1>
        </div>
      </div>
    </div>



  );
};

export default BlueButtonStrip;
