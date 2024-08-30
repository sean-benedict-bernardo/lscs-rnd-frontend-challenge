
// eslint-disable-next-line react/prop-types
function LandingPage({ startQuiz }) {
    return (
        <div className='landing-page'>
            <h1 className="text-center">Le Quizzer</h1>
            <div className="divider divider-primary !m-0"></div>
            <h2 className="text-center">Instructions</h2>
            <ul className="px-12 list-disc">
                <li>This is a multiple choice quiz</li>
                <li>Each question must have an answer before proceeding to the next question</li>
                <li>You cannot backtrack to previous questions once you move onto the next</li>
                <li>Good luck, have fun</li>
            </ul>
            <div className="divider divider-primary !m-0"></div>
            <button className="text-lg text-white bg-primary hover:bg-secondary btn" onClick={startQuiz}>Start Quiz</button>
        </div>
    )
}

export default LandingPage
