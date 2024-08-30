// eslint-disable-next-line react/prop-types
export default function QuizResult({ quizScore, quizTotal, exitQuiz, playAgain }) {
    return (
        <div className='flex-col items-center w-full overflow-hidden border-4 border-secondary rounded-3xl'>

            {/* Header */}
            <div className='flex-col w-full p-2 bg-secondary'>
                <h1 className="font-extrabold text-center">Game Over!</h1>
                {/* conditional rendering feedback here */}
            </div>
            {/* Score */}
            <div className="flex-col items-center justify-center w-full p-2">
                <h2 className="font-semibold">
                    {quizScore == quizTotal
                        ? "Congratulations for a perfect score!"
                        : quizScore / quizTotal >= 0.60
                            ? "Congratulations!"
                            : "Better luck next time!"}
                </h2>
                <div className="flex-row items-center m-4">
                    <h2 className="text-center">Score:</h2>
                    <div className="mod-radial-progress !m-0"
                        style={{ "--value": quizScore / quizTotal * 100, "--size": "6rem", "--thickness": "0.5rem" }}
                        role="progressbar">
                        <span className='text-xl font-bold'>{quizScore} of {quizTotal}</span>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className='flex-row justify-center w-full gap-2 p-2 bg-secondary'>
                <button onClick={exitQuiz}>
                    Exit Quiz
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                    </svg>
                </button>
                <button onClick={playAgain} >
                    Retake Quiz
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                    </svg>
                </button>
            </div >
        </div>
    )
}