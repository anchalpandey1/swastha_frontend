import React from 'react'

const Track = () => {
  return (
    <div>
        <div class="bg-white-700 p-4">
        <h1 className='text-xl text-center font-bold leading-9 tracking text-blue-900 md:text-3xl mt-10 mb-10'>Hit your health goals in 1-2-3</h1>
    <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        <div class="flex md:contents flex-row-reverse">
            <div
                class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 class="text-lg font-semibold lg:text-xl">Track food, fitness & fasting</h3>
                <p class="mt-2 leading-6">Tracking calories and macros is easy with our barcode scanner and device integration.</p>
               </div>
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                    </div>
                </div>
                <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
        </div>

        <div class="flex md:contents">
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-indigo-300"></div>
                </div>
                <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
            <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                <h3 class="text-lg font-semibold lg:text-xl">Learn what works</h3>
                <p class="mt-2 leading-6">Personalized nutrition insights reveal what's working so you can make smarter choices.</p>
                  </div>
        </div>

        <div class="flex md:contents flex-row-reverse">
            <div
                class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 class="text-lg font-semibold lg:text-xl">Change your habits and reach your goals</h3>
                <p class="mt-2 leading-6">Now you have the tools and knowledge to build healthy habits for life.</p>
               </div>
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                    </div>                    
                </div>
                <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                
             </div>
        </div>

      

    </div>
</div>
    </div>
  )
}

export default Track