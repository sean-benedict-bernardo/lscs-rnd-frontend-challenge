/* eslint-disable react/prop-types */
import { useState } from 'react'

function Question({ questionNum, questionCount, questionObj, nextQuestion, exitQuiz }) {
    const [selected, setSelected] = useState(null);

    // On the off chance the answer is not in the options
    // automatically credit it as a correct answer
    const validateAnswer = () => {
        console.log(questionNum, selected, questionObj.answer);
        return questionObj.answer === selected || !questionObj.options.includes(questionObj.answer);
    }

    return (
        <>
            <div className='flex-col overflow-hidden border-4 border-secondary rounded-3xl'>

                {/* Question and Progress Tracker */}
                <div className='flex-col items-center gap-4 p-2 bg-secondary md:flex-row-reverse'>
                    <div className="mod-radial-progress"
                        style={{ "--value": questionNum / questionCount * 100, "--size": "6rem", "--thickness": "0.5rem" }}
                        role="progressbar">
                        <span className='text-xl font-bold'>{questionNum} of {questionCount}</span>
                    </div>
                    <h2 className='w-full md:w-1/2 md:flex-grow'><span className='font-bold'>Q{questionNum}:</span> {questionObj.question}</h2>
                </div>
                {/* Options */}
                <div className='flex-col p-2 gap-y-2 radioButtons'>
                    {
                        questionObj.options.map((option, index) => {
                            return <label key={index} className='flex flex-row px-4 gap-x-4'>
                                <input type='radio' name={questionNum} value={option} className="radio"
                                    onChange={(e) => { setSelected(e.target.value) }} />
                                <span className='text-xl'> {option} </span>
                            </label>
                        })
                    }
                </div>
                {/* Buttons */}
                <div className='flex-row justify-center p-2 md:justify-end gap-x-2 bg-secondary'>
                    <button onClick={() => exitQuiz()}>
                        Exit Quiz
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                        </svg>
                    </button>

                    {(questionNum != questionCount)
                        ? <button onClick={() => { nextQuestion(validateAnswer()) }} disabled={selected == null}>
                            Next
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                        : <button onClick={() => { nextQuestion(validateAnswer()) }} disabled={selected == null}>
                            Submit
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </button>}
                </div >
            </div >
        </>
    );
}

export default Question;