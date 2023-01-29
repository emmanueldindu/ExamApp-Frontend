import React, { useState, useEffect } from 'react'

import { useFetchQuestion } from '../hooks/FetchQuestions'
import { useDispatch, useSelector } from 'react-redux'
import { updateResult } from '../hooks/setResult'

export default function Questions({onChecked}) {

  
  const [checked, setChecked] = useState(undefined)
  const {trace} = useSelector(state => state.questions)
  const result = useSelector(state => state.result.result)
 
  
  const [{ isLoading,  serverError }] = useFetchQuestion()
  const questions  = useSelector(state => state.questions.queue[state.questions.trace])
  const dispatch = useDispatch()

  useEffect(() => { 

    dispatch(updateResult({ trace, checked }))

    
  }, [checked])
  

  

  
  function onSelect(i) {
    onChecked(i)
    setChecked(i)
    dispatch(updateResult({ trace, checked}))
  }
  
  if(isLoading) return <h3 className='mx-auto relative '>Loading Questions</h3>
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
                    type="checkbox"
                    name="options"
                    value={false}
                   
                      id={`q${i}-option`}
                    onChange={() => 
                      onSelect(i) }

                  />
                  <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
    
                  <div className={`check ${result[trace] == i ? 'checked' : ''} `}></div>
                  

        </li>
              ))
            }
                </ul>
                
              </div>
      </div>
      
  )
}


