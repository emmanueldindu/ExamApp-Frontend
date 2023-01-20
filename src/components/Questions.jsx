import React, { useState, useEffect } from 'react'

import { useFetchQuestion } from '../hooks/FetchQuestions'
import { useDispatch, useSelector } from 'react-redux'
import { updateResultAction } from '../redux/resultReducer'
import { updateResult } from '../hooks/setResult'

function Questions({onChecked}) {

  const dispatch = useDispatch()
  
  const [checked, setChecked] = useState(undefined)
  const [allChecked, setAllChecked] = useState(false);

  //selecting the check
  const trace = useSelector(state => state.questions)
  //trace is thhe particular question
  const result = useSelector(state => state.result.result)
  // result or user choice
  // localStorage.setItem('result', result);
    
  const [{ isLoading, apiData, serverError }] = useFetchQuestion()
    
  const questions  = useSelector(state => state.questions.queue[state.questions.trace])
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
                    onChange={() => {
                      onSelect(i)
                      // handleChange(i)
                      
                      // setAllChecked(i)
                    }
                    
                    }


                    // checked={checked === result[trace] && checked !== undefined ? true : false}
                  // checked={result[trace] == i ? checked : ''}
                  // checked={result[trace]== i}
                    // checked={false ? '' : result == i}
                    
// oncheck the user should be albe to select his option 


                    // checked={result[trace] == i ? checked : ''}
                  // checked={checked}
                    // checked={'' result[trace]== i}
                    // checked={}
                    
                  />
                  <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                  {/* {let myValue = localStorage} */}
        </li>
              ))
            }
                </ul>
                
              </div>
    </div>
  )
}

export default Questions
