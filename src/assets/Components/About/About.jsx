import React from 'react'

export default function About() {
  return (
    <>
      <div className=" w-full pb-32 py-20 text-white px-28 bg-green-300">
        <h1 class="my-10 font-bold text-4xl">ABOUT COMPONENT</h1>
        <p class="my-3 inline-block before:w-[130px] before:h-2 before:bg-white relative before:left-10 before:bottom-0 before:absolute after:h-2 after:w-[130px] after:top-3 before:top-3 after:bg-white after:right-10 after:bottom-0 after:absolute ">
          <svg xmlns="http://www.w3.org/2000/svg" fill='white'  height="30px" width="30px" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          </p>        
        
        <div class="flex gap-x-48  justify-center">
          <div>
            <p class="text-lg max-w-[450px]">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div>
            <p class="text-lg max-w-[450px]">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </>
  )
}
