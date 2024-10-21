import React from 'react'

const Review = () => {
  return (
    <div>
      <section className="relative py-20 overflow-hidden bg-gray-900 shadow sm:py-24 md:py-24">
        <div className="relative max-w-6xl px-16 mx-auto xl:px-0">
          <svg className="absolute top-0 left-0 hidden w-32 h-32 -mt-3 -ml-16 text-yellow-300 opacity-50 xl:block" stroke="currentColor" fill="none" viewBox="0 0 144 144">
            <path strokeWidth="2" d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"></path>
          </svg>
          <div className="relative xl:pl-32 lg:flex lg:items-center">
            <div className="relative">
              <blockquote className="relative">
                <div className="text-xl text-center font-semibold leading-9 tracking text-gray-100 md:text-3xl">
                  <p>
                  <div className="flex justify-center mt-2">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 text-yellow-400"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <span className="block">3.7 Million 5-Star Reviews</span>
                 
                    <span className="block mt-2">
                      “Not only are the tools super helpful, the customer service is insanely awesome"
                    </span>
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Review
