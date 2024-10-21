import React from 'react'

const Starting = () => {
  return (
  
    <div>
      <section
        className="text-gray-700 body-font relative min-h-screen" 
       
      >
        <h1 className='text-4xl font-bold text-center mt-5 text-black'>
          Welcome To our Health Track
        </h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <a href="/health" className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 6v6h4" stroke="currentColor" strokeWidth="2" />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">Need Your Health</h2>
                <p className="leading-relaxed">1.4K People Used</p>
              </div>
            </a>
            <a href="/quize" className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM12 10c-2.2 0-4 1.8-4 4v1h8v-1c0-2.2-1.8-4-4-4zM12 20H3v-2h9v2zm9-8c-2.2 0-4 1.8-4 4v1h9v-1c0-2.2-1.8-4-4-4zM21 20H12v-2h9v2z" />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">Quiz</h2>
                <p className="leading-relaxed">4.7K People Used</p>
              </div>
            </a>
            <a href="/todo" className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" />
                  <path d="M7 6l1 1 2-2m-2 2l2 2 4-4" stroke="currentColor" />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">TODO-Health</h2>
                <p className="leading-relaxed">2.6k People Used</p>
              </div>
            </a>
            <a href="/" className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <rect x="4" y="5" width="16" height="2" />
                  <rect x="4" y="11" width="16" height="2" />
                  <rect x="4" y="17" width="16" height="2" />
                  <path d="M8 7l1 1 2-2m-2 2l2 2 4-4" />
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">Explore More</h2>
                <p className="leading-relaxed">About Swastha Bharat</p>
              </div>
            </a>
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-black">
              Here, you’ve already made up your mind to stay fit. Congratulations, you are already ahead of many people!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
 
}

export default Starting