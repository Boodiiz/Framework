import React from 'react'

export default function Contact() {
  return (
    <>
      <h2 class="text-2xl mt-10 font-bold">CONATCT SECTION</h2>
      <p class="my-3 inline-block before:w-[130px] before:h-2 before:bg-black relative before:left-10 before:bottom-0 before:absolute after:h-2 after:w-[130px] after:top-3 before:top-3 after:bg-black after:right-10 after:bottom-0 after:absolute ">
      <svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
      </p>

      <div class="w-[50%] m-auto">
          
        <form>
            <div class="flex flex-col gap-6 my-6 text-left">
                


                <div class="relative z-0 mb-6">
                    <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm 
                    text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white
                     dark:border-gray-600 dark:focus:border-green-500 focus:outline-none 
                     focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                    <label for="floating_standard" class="absolute text-sm text-gray-500
                     dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                     origin-[0] peer-focus:start-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                      peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 
                      rtl:peer-focus:left-auto">First Name</label>
                </div>
                <div class="relative z-0 mb-6">
                    <input type="number" id="floating_standard" class="block py-2.5 px-0 w-full text-sm 
                    text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white
                     dark:border-gray-600 dark:focus:border-green-500 focus:outline-none 
                     focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                    <label for="floating_standard" class="absolute text-sm text-gray-500
                     dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                     origin-[0] peer-focus:start-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                      peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 
                      rtl:peer-focus:left-auto">userAge</label>
                </div>


                <div class="relative z-0 mb-6">
                    <input type="emai" id="floating_standard" class="block py-2.5 px-0 w-full text-sm 
                    text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white
                     dark:border-gray-600 dark:focus:border-green-500 focus:outline-none 
                     focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                    <label for="floating_standard" class="absolute text-sm text-gray-500
                     dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                     origin-[0] peer-focus:start-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                      peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 
                      rtl:peer-focus:left-auto">userEmail</label>
                </div>
                <div class="relative z-0 mb-6">
                    <input type="password" id="floating_standard" class="block py-2.5 px-0 w-full text-sm 
                    text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white
                     dark:border-gray-600 dark:focus:border-green-500 focus:outline-none 
                     focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                    <label for="floating_standard" class="absolute text-sm text-gray-500
                     dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
                     origin-[0] peer-focus:start-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                      peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 
                      rtl:peer-focus:left-auto">userPassword</label>
                </div>
          
            </div>
            
            
            <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 
            focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm 
            w-full sm:w-auto px-5 py-2.5 text-center mr-[70%] dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Send Message</button>
        </form>

      </div>

      
    </>
  )
}
