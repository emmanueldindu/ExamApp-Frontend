import React from 'react'
import { Link } from 'react-router-dom'


function Result() {

  function onRestart() {
  console.log('restart')
  
}

  return (
    <div className='bg-[#f1f1f1] h-screen  overflow-x-hidden flex-col w-full max-h-full sm:h-screen md:h-screen lg:h-screen '>
    <div className="h-4/5 w-full relative items-center  py-6  justify-center  mx-auto md:py-3   ">
      
      <div className='w-full relative mx-auto justify-center items-center text-center'>         
      <h1 className='relative mx-auto pb-12 px-36 title text-3xl underline underline-offset-8 decoration-yellow-500 gap-2   w-full sm:w-full  '>
        QuizSet
      </h1>
      </div>
 
    
        <div className="flex gap-4 w-full mx-auto  relative">
          <div className="mx-auto grid grid-cols-1 gap-y-4">Username:
            <p>Total Quiz Points:</p>
            <p>Total Questions:</p>
            <p>Total Attempts:</p>
            <p>Total Earned Points</p>
            <p className='font-bold'>Quiz Result</p>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-y-3">Odoi
            <p>50</p>
          <p>05</p>
          <p>03</p>
          <p>20</p>
          <p className='font-bold'>passed</p>
          </div>
          
   </div>
   <div className=" relative w-full mx-auto items-center justify-center text-center pt-12 ">
          <Link to="/">
            <button onClick={onRestart} className='bg-black text-yellow-400 items-center text-center relative mx-auto btnn  hover:bg-white active:bg-black focus:outline outline-black focus:ring focus:ring-black '>
              Restart 
              </button>
          </Link>
          </div>
      </div>
      
  
  </div>
  )
}

export default Result
