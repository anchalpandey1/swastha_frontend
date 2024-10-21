// import React from 'react'
// import h1 from "../../assets/h1.png"
// const Hero = () => {
//   return (
//     <div>
//       <section className="relative bg-blue-600">
//         <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
//           <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20">
//             <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
//               The Website You Want Without The
//               <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')] bg-cover bg-center px-4 text-white">
//                 Dev Time
//               </span>.
//             </h1>
//             <p className="mx-auto mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
//             </p>
//             <div className="flex justify-center">
//               <a href="#" className="mr-5 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mr-6">
//                 Get Started
//               </a>
//               <a href="#" className="flex max-w-full flex-row items-center justify-center rounded-xl border border-solid border-[#1353fe] px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px]">
//                 <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905a575ec39b6784fc687c_Play.svg" alt="" className="mr-2 inline-block w-6" />
//                 <p className="text-black">View Showreel</p>
//               </a>
//             </div>
//           </div>
//           <div className="relative mx-auto h-[512px]">
//             <img src={h1} alt="" className="inline-block h-full w-full rounded-xl object-cover sm:rounded-2xl" />
//             <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"></div>
//           </div>
//         </div>
//         <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg" alt="" className="absolute bottom-0 left-0 right-auto top-auto -z-10 inline-block md:bottom-1/2 md:left-0 md:right-auto md:top-auto" />
//         <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg" alt="" className="absolute bottom-auto left-auto right-0 top-0 -z-10 hidden sm:inline-block" />
//       </section>
//     </div>
//   )
// }

// export default Hero


import React from 'react'
import h2 from "../../assets/h2.png"
const Hero = () => {
  return (
    <div>
    
<section class="px-3 py-5 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-500 lg:py-10">
    <div class="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div class="order-2 lg:order-1 flex flex-col justify-center items-center">
           
            <p class="text-4xl text-center text-white font-bold md:text-4xl">Reach your goals with Swastha Ishko – your unique path to wellness.</p>
            <p class="mt-2 text-white text-sm md:text-lg">Build healthy habits with the all-in-one food, exercise, and calorie tracker.</p>
            <a href="/start">
  <button class="text-lg md:text-2xl bg-white text-blue-500 rounded-full py-2 px-5 mt-10 hover:bg-slate-200">
    Start Today
  </button>
</a>
   </div>
        <div class="order-1 lg:order-2">
            <img class="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src={h2} alt=""/>
        </div>
    </div>
</section>

    </div>
  )
}

export default Hero