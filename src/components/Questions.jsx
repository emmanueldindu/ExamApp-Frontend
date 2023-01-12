import React, { useState } from 'react'


function Questions() {

    const [checked, setChecked] = useState(undefined)
    
    function onSelect() {
        console.log('radio change')
        // setChecked(true)
    }
        // }const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '5abf4a4efemsh5079ec851d3106cp132fc7jsnb650f9a44519',
    //         'X-RapidAPI-Host': 'ases-quiz-api1.p.rapidapi.com'
    //     }
    // };
    
    // fetch('https://ases-quiz-api1.p.rapidapi.com/questions/random/20', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err))

    // return console.log(response)
    
    const url = 'https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const questions = data.results;
    questions.forEach(question => {
    //   console.log(question.question); // prints the question text
    //   console.log(question.correct_answer); // prints the correct answer
      console.log(question); // prints an array of incorrect answers
    });
  })
  .catch(error => {
    console.error(error);
  });
    
    return (
      <div className='w-full p-6 flex-1'>
          <h2 className='relative px-8'>Lorem ipsum dolor sit amet consectetur.</h2>
          <div className="relative py-5">
          <ul >
              <li>
                      <input
                          type="radio"
                            name="options"
                            value={false}
                            id="q1"
                            onChange={onSelect()} />
                        <label className='text-primary' htmlFor="q1">option</label>
                        <div className="check "></div>
              </li>
                </ul>
                
              </div>
    </div>
  )
}

export default Questions
