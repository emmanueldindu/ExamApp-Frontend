import React from 'react'

function Main() {
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

        <form id="form" className='w-full item-center relaative p-7 '>
          <input type="text" name="" className='bg-white innput  relative h-10 items-center  text-slate-600 mx-auto place-content-center' placeholder='Enter a UserName' id="" />


        </form>
        

        </div>
    
    </div>
  )
}

export default Main
