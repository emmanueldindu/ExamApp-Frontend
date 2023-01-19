import React from 'react'
import Questions from './Questions'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { MoveNextQuestion } from '../hooks/FetchQuestions'
import { MovePrevQuestion } from '../hooks/FetchQuestions'
import { PushAnswer } from '../hooks/setResult'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
// import Result from '.Result'

function Quiz() {

  // const trace = useSelector(state => state.questions.trace)
const [check, setChecked] = useState(undefined)
  const { queue, trace } = useSelector(state => state.questions);
  const result = useSelector(state => state.result.result);

  const dispatch = useDispatch()
  
    useEffect(() => {

  // console.log(result)
  },)
  function onPrev() {
    if (trace > 0) {
      // console.log('Prev')
      dispatch(MovePrevQuestion())  
    }
     
    // console.log(trace)
  
  }  
  
  function onNext() {
   
    if (trace < queue.length) {
      console.log('Next')
      dispatch(MoveNextQuestion())
      if (result.length <= trace) {
        dispatch(PushAnswer(check))
    }
      // console.log(state)
     
    }
    // console.log(MoveNextQuestion())
    // console.log(trace)
    
  }
  function onChecked(check) {
    console.log(check)
    setChecked(check)
  
  }

  if (result.length && result.length >= queue.length) {
   return <Navigate to={'/result'}></Navigate>
  }
  


  return (
    <div className='bg-[#f1f1f1] h-screen  overflow-x-hidden flex-col w-full max-h-full sm:h-screen md:h-screen lg:h-screen '>
      
    <div className="h-4/5 w-full relative items-center  py-6  justify-center  mx-auto md:py-3   ">
      <div className='w-full relative mx-auto justify-center items-center text-center'>         
      <h1 className='relative mx-auto pb-12 px-36 title text-3xl underline underline-offset-8 decoration-yellow-500 gap-2   w-full sm:w-full  '>
        QuizSet
      </h1>
        </div>
        <Questions onChecked={onChecked} />

      </div>
      <div className="grid grid-cols-2">
      <button onClick={onPrev} className='bg-yellow-400 text-black items-center text-center relative mx-auto btnnn  hover:bg-white hover:text-yellow-400 active:bg-black focus:outline outline-black focus:ring focus:ring-black '>
              Prev 
              </button>
              <button onClick={onNext} className='bg-black text-yellow-400 items-center text-center relative mx-auto btnnn  hover:bg-white active:bg-black focus:outline outline-black focus:ring focus:ring-black '>
              Next 
              </button>
      </div>
      </div>

  )
}

export default Quiz
