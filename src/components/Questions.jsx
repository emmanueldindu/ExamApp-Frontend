import React, { useState, useEffect } from 'react'

import { useFetchQuestion } from '../hooks/FetchQuestions'
import { useSelector } from 'react-redux'

function Questions() {

    const [checked, setChecked] = useState(undefined)

    
    const [{ isLoading, apiData, serverError }] = useFetchQuestion()
    
  const questions  = useSelector(state => state.questions.queue[state.questions.trace])
  const trace = useSelector(state => state.questions.trace)
  useEffect(() => {
    // console.log(questions)
  }, )
  

  
  function onSelect() {
   
        // setChecked(true)
  }
  
  if(isLoading) return <h3>isLoading</h3>
  if (isLoading) return <h3>{serverError || 'unknown error'}</h3>
  
  

    
    
    return (
      <div className='w-full p-6 flex-1'>
        <h2 className='relative px-8'>{questions?.question }</h2>
          <div className="relative py-5">
          <ul key={questions?.id}>


             
            {
              questions?.options.map((q, i) => (
                <li key={i}>
                <input
                    type="radio"
                      name="options"
                      value={false}
                      id={`q${i}-option`}
                      onChange={onSelect()} />
                  <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                  <div className="check "></div>
        </li>
              ))
            }
                </ul>
                
              </div>
    </div>
  )
}

export default Questions
