import React from "react";

const Newsletter = () => {
  return (
    <div>
      <section class="flex flex-col max-w-4xl mx-auto overflow-hidden bg-violet-600 rounded-xl md:flex-row md:h-64 mt-28"data-aos="fade-up"
     data-aos-duration="2000">
        <div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-violet-600">
          <div class="px-6 py-6 md:px-8 md:py-0">
            <h1 className="text-lg font-bold text-white">Subscribe Now</h1>
            <h2 class="text-4xl font-bold text-white">
            Get My Newsletter
            </h2>

            <p class="mt-2 text-lg text-white">
            Get latest news, tips and trics in your inbox
            </p>
          </div>
        </div>

        <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
          <form>
            <div class="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                class="px-6 py-2 w-72 h-16 text-black placeholder-gray-900 bg-white outline-none dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                type="text"
                name="email"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />

              <button class="px-4 py-3 text-sm font-medium rounded-md tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-sky-400 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                Send Now
              </button>
            </div>
          </form>
        </div>
      </section>
      <div className="w-full h-28">
            <p class="text-center font-semibold text-lg text-gray-500 dark:text-gray-400 mt-16">Developed with love by <span className="font-bold text-gray-200 name">Parvez Islam</span> © 2023</p>
        </div>
    </div>
  );
};

export default Newsletter;
