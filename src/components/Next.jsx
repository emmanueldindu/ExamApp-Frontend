import React from 'react'
import svg from '../assets/Speed.png'

function Next() {
  return (
    <div className='bg-[#f1f1f1] h-screen overflow-hidden flex-col w-full max-h-full '>
      
      <div className="h-3/4 w-full relative flex-col items-center mt-12 py-6  justify-center  mx-auto md:py-3  ">
        <div>         
        <h1 className='relative mx-auto pb-12 px-36  w-full sm:px-60 '>
          QuizSet
        </h1>
        </div>

      <div className="w-full mx-auto h-full sm:w-3/5  relative  ">
          <img src={svg}
            alt=""
            
          
          />
          <div className='mx-auto relative items-center text-center'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, ipsam!
            </p>
          </div>

          <div className="">
            <button className='bg-black text-yellow-400'>
              Next
            </button>
          </div>
              
           </div>
      
      </div>
       
    </div>
  )
}

export default Next
