import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { resetAllAction } from '../redux/questionReducer'
import { resetResultAction } from '../redux/resultReducer'
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper'

function Result() {
  const dispatch = useDispatch()
 const {questions : {queue, answers}, result: {result, userId}} = useSelector(state => state)

  useEffect(() => {
   console.log(flag)
  })

  const totalPoints = queue.length * 10;
  const attempts =  attempts_Number(result)
  const earnPoint = earnPoints_Number(result, answers, 10)
  const flag = flagResult(totalPoints, earnPoint)
  function onRestart() {
    dispatch(resetAllAction())
    dispatch(resetResultAction())
  
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
            <p>{ totalPoints || 0}</p>
            <p>{ queue.length}</p>
            <p>{ attempts}</p>
            <p>{earnPoint || 0 }</p>
            <p className='font-bold'> 
              <span style={{ color: `${flag ? 'green' : 'red'}` }} >{flag ? 'Passed 🙂 ' : 'failed 😢 '}</span>

            </p>
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
      <table className="table-auto w-full overflow-x-scroll md:w-2/3 mx-auto text-left pt-7 relative p-7">
        <thead>
    <tr>
      <th>Name</th>
      <th>Atempts</th>
      <th>Exam points</th>
      <th>Result</th>
              
            </tr>
  </thead>
  <tbody>
    <tr className='mx-auto'>
      <td>odoi</td>
      <td>03</td>
      <td>20</td>
            <td>
              
              Passed
              </td>
            </tr>
            </tbody>
        </table>
  
  </div>
  )
}

export default Result
