import { React, useRef } from 'react'
import { Link } from 'react-router-dom'


function Main() {
  const inputRef = useRef(null)


  return (
    <div className='bg-[#f1f1f1] h-screen  overflow-x-hidden flex-col w-full max-h-full sm:h-screen md:h-screen lg:h-screen '>
      <div className="h-4/5 w-full relative items-center  py-6  justify-center  mx-auto md:py-3   ">
        
        <div className='w-full relative mx-auto justify-center items-center text-center'>         
        <h1 className='relative mx-auto pb-12 px-36 title text-3xl underline underline-offset-8 decoration-yellow-500 gap-2   w-full sm:w-full  '>
          QuizSet
        </h1>
        </div>
        <div className="w-full mx-auto relative p-12 gap-y-6 md:w-full md:pl-32   ">

          <ol className='list-disc leading-10'>
          <li> You will be asked 10 questions.  </li>
          <li> 5 points is awarded for the correct answer  </li>
            <li> Each question has three options. choose the correct one.
          </li>
<li>  you can review and change your answers befor the quiz  finished</li>          
          </ol>  
        </div>

        <form id="form" className='w-full item-center relative p-7 ml-4 md:ml-24 '>
          <input type="text" ref={inputRef} name="" className='bg-white innput w-[18rem] relative h-10 items-center  text-slate-600 mx-auto place-content-center' placeholder='Enter a UserName' id="" />



        </form>
        <div className=" relative w-full mx-auto items-center justify-center text-center pt-12 ">
          <Link to="/quiz">
            <button className='bg-black text-yellow-400 items-center text-center relative mx-auto btnn  hover:bg-white active:bg-black focus:outline outline-black focus:ring focus:ring-black '>
              Start Quiz 
              </button>
              </Link>

          </div>

        </div>
    
    </div>
  )
}

export default Main
