import React from 'react'
import svg from '../assets/Speed.png'
import { Link } from 'react-router-dom';

function Next() {
  return (
    <div className='bg-[#f1f1f1] h-screen  overflow-x-hidden flex-col w-full max-h-full sm:h-screen md:h-screen lg:h-screen '>
      
      <div className="h-4/5 w-full relative items-center  py-6  justify-center  mx-auto md:py-3   ">
        <div className='w-full relative mx-auto justify-center items-center text-center'>         
        <h1 className='relative mx-auto pb-12 px-36 title text-3xl underline underline-offset-8 decoration-yellow-500 gap-2   w-full sm:w-full  '>
          QuizSet
        </h1>
        </div>

      <div className="w-full mx-auto h-4/5 absolute  sm:w-full md:w-full    ">
          <img src={svg}
            alt=""
            className='h-3/4 md:h-4/5 relative mx-auto md:px-8 '
            
          
          />
          <div className='mx-auto relative items-center text-center'>
            <p>
              Do you have what it takes to battle in our Quiz test?? 😉
              lets find out!!!
            </p>
          </div>

          <div className=" relative w-full mx-auto items-center justify-center text-center pt-12 ">
          <Link to="/main">
            <button className='bg-black text-yellow-400 items-center text-center relative mx-auto btnn '>
              Next
              </button>
              </Link>

          </div>
              
           </div>
      
      </div>
       
    </div>
  )
}

export default Next
