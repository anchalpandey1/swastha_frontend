import React from 'react'

const About = () => {
  return (
    <div>
        <section class="pt-10 overflow-hidden   md:pt-0 sm:pt-16 2xl:pt-16">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">

            <div>
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Hey 👋 I
                    am 
                    <br class="block sm:hidden" /> Swastha Ishko
                </h2>
                <p class="max-w-lg mt-3 text-xl leading-relaxed  text-black md:mt-8">
                At Wsastha, we are dedicated to empowering individuals to lead healthier, more balanced lives. Our mission is to provide personalized solutions that make it easy to maintain physical well-being, mental clarity, and overall vitality. By integrating modern technology with proven wellness strategies, we aim to help people achieve their fitness goals and foster a healthier lifestyle
                </p>

                
            </div>

            <div class="relative">
                <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" />
            </div>

        </div>
    </div>
</section>
    </div>
  )
}

export default About