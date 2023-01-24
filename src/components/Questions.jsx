import React, { useState, useEffect } from 'react'

import { useFetchQuestion } from '../hooks/FetchQuestions'
import { useDispatch, useSelector } from 'react-redux'
import { updateResult } from '../hooks/setResult'

export default function Questions({onChecked}) {

  
  const [checked, setChecked] = useState(undefined)
  const [allChecked, setAllChecked] = useState(false);
  

  const {trace} = useSelector(state => state.questions)
  //trace is thhe particular question
  const result = useSelector(state => state.result.result)
  // result or user choice
  // localStorage.setItem('result', result);
  
  const [{ isLoading, apiData, serverError }] = useFetchQuestion()
  
  const questions  = useSelector(state => state.questions.queue[state.questions.trace])
  const dispatch = useDispatch()
  // const trace = useSelector(state => state.questions.trace)
  useEffect(() => { 
console.log(result)
    dispatch(updateResult({ trace, checked }))
    // console.log(trace)
    
  }, [checked])
  

  
    // const [value, setValue] = useState('')

    // const handleChange = (event) => {
    //   setValue(event.target.value)
    //   localStorage.setItem('myKey', event.target.value)
    // }

  
  function onSelect(i) {
    onChecked(i)
    setChecked(i)
    dispatch(updateResult({ trace, checked }))

    // handleChange(i)
    
        // console.log(i)
  }
  
  if(isLoading) return <h3>isLoading</h3>
  if (isLoading) return <h3>{serverError || 'unknown error'}</h3>
  
  function handleCheckAll() {
    // console.log(result)
    setAllChecked(!allChecked);
}

    
    
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
                    // className='custom-radio'
                      id={`q${i}-option`}
                    onChange={() => 
                      onSelect(i)
                    
                    
                    
                    }

                  />
                  <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
        {/* <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div> */}
<div className={`check ${result[trace] === i ? 'checked' : ''} `}></div>

        </li>
              ))
            }
                </ul>
                
              </div>
    </div>
  )
}


