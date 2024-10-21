import React from "react";
import sleep from "../../assets/sleep.jpeg";
import yoga from "../../assets/yoga.jpg";
import fruit from "../../assets/fruit.jpeg";
import bg1 from "../../assets/bg1.jpg";

const Start = () => {
  return (
    <div
      className="min-h-screen mt-20 bg-white bg-center"
     
    >
      {/* Title Section */}
      <div className="text-center mt-10 mb-8">
        <h1 className="text-3xl font-bold text-black">
          Transform Your Lifestyle: Discover the Power of Yoga, Mindful Eating, and Fitness Tracking
        </h1>
      </div>

      {/* Image Grid Section */}
      <div className="hidden sm:grid grid-cols-3 gap-8 justify-center mt-4">
        
        {/* First Image Card */}
        <div className="p-5">
          <div className="rounded bg-white shadow-lg transform transition-transform duration-500 hover:scale-105">
            <a href="https://yoga.ayush.gov.in/YAP/Home.php" target="_blank" rel="noopener noreferrer">
              <img className="w-full h-64 object-cover" src={yoga} alt="Yoga" />
            </a>
            <div className="px-5 py-5 text-center">
              <a
                href="https://example.com/yoga"
                className="font-semibold text-lg hover:text-indigo-600 transition duration-500"
                target="_blank" rel="noopener noreferrer"
              >
                Ready for some wins? Start tracking, it’s easy!
              </a>
            </div>
          </div>
        </div>

        {/* Second Image Card */}
        <div className="p-5">
          <div className="rounded bg-white shadow-lg transform transition-transform duration-500 hover:scale-105">
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3649719/" target="_blank" rel="noopener noreferrer">
              <img className="w-full h-64 object-cover" src={fruit} alt="Yog" />
            </a>
            <div className="px-5 py-5 text-center">
              <a
                href="https://example.com/yog"
                className="font-semibold text-lg hover:text-indigo-600 transition duration-500"
                target="_blank" rel="noopener noreferrer"
              >
                Discover the impact of your food and fitness
              </a>
            </div>
          </div>
        </div>

        {/* Third Image Card */}
        <div className="p-5">
          <div className="rounded bg-white shadow-lg transform transition-transform duration-500 hover:scale-105">
            <a href="https://example.com/vege" target="_blank" rel="noopener noreferrer">
              <img className="w-full h-64 object-cover" src={sleep} alt="Vegetables" />
            </a>
            <div className="px-5 py-5 text-center">
              <a
                href="https://example.com/vege"
                className="font-semibold text-lg hover:text-indigo-600 transition duration-500"
                target="_blank" rel="noopener noreferrer"
              >
                A healthy Sleep is the root of healthy mind
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Button (Desktop) */}
      <div className="hidden sm:block text-center mt-20 mb-16">
        <a href="/health">
          <button className="bg-indigo-600 text-white text-xl font-semibold py-4 px-10 rounded hover:bg-indigo-700 transition duration-300">
            Continue
          </button>
        </a>
      </div>

      {/* Continue Button (Mobile) */}
      <a
        href="/health"
        className="block sm:hidden flex justify-center items-center h-screen"
      >
        <div className="relative cursor-pointer">
          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
          <div className="relative p-6 bg-white border-2 border-indigo-500 rounded-lg hover:scale-105 transition duration-500">
            <div className="flex items-center">
              <span className="text-xl">😎</span>
              <h3 className="ml-3 text-lg font-bold">Continue</h3>
            </div>
            <p className="text-gray-600">Swastha Bharat</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Start;
