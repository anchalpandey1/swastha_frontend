import React from 'react'
import h2 from "../../assets/h2.png"
const Comingsoon = () => {
  return (
    <div>
<div class="relative h-[600px] sm:h-[600px] bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-800">
  <div class="flex flex-col md:flex-row gap-4 justify-center items-center w-full h-full px-3 md:px-0">
    
    <div class="flex flex-col gap-4 justify-center items-start md:w-1/2 ml-10">
      <p class="text-gray-300 ml-2">Have 2 mins?</p>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        Get your personalized daily plan
      </h1>
      <div class="flex items-center justify-end ">
                <a class=" items-center justify-center rounded-xl bg-white px-3 py-2 text-xl font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                    href="/quize">Take The Quize</a>
                
            </div>
    </div>
    
   
    <div class="md:w-1/2 flex justify-center">
      <img src={h2} alt="Your Image" class="w-full max-w-sm"/>
    </div>
  </div>
</div>


        <div class="flex flex-col h-screen bg-center bg-cover bg-no-repeat ">
    <div
        class="grid place-items-center w-4/5 mx-auto p-10 my-20 sm:my-auto bg-white-600 border-4 border-indigo-600 bg-opacity-70 rounded-xl shadow-2xl space-y-5 text-center cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="h-24 w-24 text-indigo-600" viewBox="0 0 16 16">
            <path
                d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z">
            </path>
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z"></path>
        </svg>
        <h1 class="text-4xl font-bold uppercase text-indigo-600 transition duration-500">Swastha Ishko</h1>
        <h2 class="text-xl text-gray-700 transition duration-500">
        Healthy eating is a continuous journey of self-discovery. And the more you track, the more empowered you’ll become to make healthy choices that support your goals.
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="/" title="Quicktoolz On Facebook"
                class="md:w-32 tracking-wide font-bold rounded border-2 border-indigo-500 hover:text-white hover:border-blue-600 hover:bg-blue-600 shadow-md py-2 px-6 inline-flex items-center transition duration-500">
                <span class="mx-auto">Fitness</span>
            </a>
            <a href="/" title="Quicktoolz On Twitter"
                class="md:w-32 tracking-wide font-bold rounded border-2 border-indigo-500 hover:text-white hover:border-blue-500 hover:bg-blue-500 shadow-md py-2 px-6 inline-flex items-center transition duration-500">
                <span class="mx-auto">Exercise</span>
            </a>
            <a href="/" title="Quicktoolz On Pinterest"
                class="md:w-32 tracking-wide font-bold rounded border-2 border-indigo-500 hover:text-white hover:border-red-600 hover:bg-red-600 shadow-md py-2 px-6 inline-flex items-center transition duration-500">
                <span class="mx-auto">Todo</span>
            </a>
            <a href="/" title="Quicktoolz On Facebook"
                class="md:w-32 tracking-wide font-bold rounded border-2 border-indigo-500 hover:text-white hover:border-yellow-600 hover:bg-yellow-600 shadow-md py-2 px-6 inline-flex items-center transition duration-500">
                <span class="mx-auto">Profile</span>
            </a>
        </div>
    </div>
</div>
    </div>
  )
}

export default Comingsoon