import React, { useState, useEffect } from 'react'
import Data from '../Database/Data'
import { useFetchQuestion } from '../hooks/FetchQuestions'
function Questions() {

    const [checked, setChecked] = useState(undefined)

  const question = Data[0] 
  
  const [{ isLoading, apiData, serverError }] = useFetchQuestion()
  useEffect(() => {
  console.log(isLoading)

    console.log(apiData)
    // console.log(serverError)
    
    }, [])  
  
  function onSelect() {
   
        // setChecked(true)
  }
  


  

    
    
    return (
      <div className='w-full p-6 flex-1'>
        <h2 className='relative px-8'>{question.question }</h2>
          <div className="relative py-5">
          <ul key={question.id}>
            {/* omo  hhkh ssasa*/}

             
            {
              question.options.map((q, i) => (
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
