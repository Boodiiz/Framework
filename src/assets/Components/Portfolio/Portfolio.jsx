import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Pic1 from "../Images/poert1.png"
import Pic2 from "../Images/port2.png"
import Pic3 from "../Images/port3.png"
export default function Portfolio({name, setUserName, change}) {
  return (
    <>
      
      
      <div class="container p-4 ">
          
          <div class="gap-4 flex flex-wrap justify-center">
            <div class="w-1/4 demo " data-modal-target="default-modal1" data-modal-toggle="default-modal1" >
              <div class="relative">
                  <div >
                      <img
                        class="w-[700px] rounded-2 "
                        src={Pic1}
                        alt="corba"
                      />
                  </div>
                    <div className="layer flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                    </div>
               </div>
            </div>
            <div class="w-1/4 demo " data-modal-target="default-modal2" data-modal-toggle="default-modal2">
              <div class="relative">
                  <div >
                      <img
                        class="w-[700px] rounded-2 "
                        src={Pic2}
                        alt="corba"
                      />
                  </div>
                    <div className="layer flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                    </div>
               </div>
            </div>
            <div class="w-1/4 demo " data-modal-target="default-modal3" data-modal-toggle="default-modal3">
              <div class="relative">
                  <div >
                      <img
                        class="w-[700px] rounded-2 "
                        src={Pic3}
                        alt="corba"
                      />
                  </div>
                    <div className="layer flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                    </div>
               </div>
            </div>
            <div class="w-1/4 demo " data-modal-target="default-modal4" data-modal-toggle="default-modal4">
              <div class="relative">
                  <div >
                      <img
                        class="w-[700px] rounded-2 "
                        src={Pic1}
                        alt="corba"
                      />
                  </div>
                    <div className="layer flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                    </div>
               </div>
            </div>
            <div class="w-1/4 demo " data-modal-target="default-modal5" data-modal-toggle="default-modal5">
              <div class="relative">
                  <div >
                      <img
                        class="w-[700px] rounded-2 "
                        src={Pic2}
                        alt="corba"
                      />
                  </div>
                    <div className="layer flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                    </div>
               </div>
            </div>
            <div class="w-1/4 demo " data-modal-target="default-modal6" data-modal-toggle="default-modal6">
              <div class="relative">
                  <div >
                      <img
                        class="w-[700px] rounded-2 "
                        src={Pic3}
                        alt="corba"
                      />
                  </div>
                    <div className="layer flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                    </div>
               </div>
            </div>
          </div> 
      </div>

      


      {/* first */}
      <div id="default-modal1" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 
              right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div class="relative p-4 w-full max-w-2xl max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <img src={Pic1} alt="" />
              </div>
          </div>
      </div>
      {/* second */}
      <div id="default-modal2" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 
              right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div class="relative p-4 w-full max-w-2xl max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <img src={Pic2} alt="" />
              </div>
          </div>
      </div>
      {/* third */}
      <div id="default-modal3" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 
              right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div class="relative p-4 w-full max-w-2xl max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <img src={Pic3} alt="" />
              </div>
          </div>
      </div>
      {/* fourth */}
      <div id="default-modal4" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 
              right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div class="relative p-4 w-full max-w-2xl max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <img src={Pic1} alt="" />
              </div>
          </div>
      </div>
      {/* fifth */}
      <div id="default-modal5" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 
              right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div class="relative p-4 w-full max-w-2xl max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <img src={Pic2} alt="" />
              </div>
          </div>
      </div>
      {/* sixth */}
      <div id="default-modal6" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 
              right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div class="relative p-4 w-full max-w-2xl max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <img src={Pic3} alt="" />
              </div>
          </div>
      </div>

    </>
  )
}

