/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Question from './QuizQuestion';
import QuizResult from './QuizResults';

function Quiz({ quizFile, exitQuiz }) {
    const [questionComponents, setComponents] = useState([]);

    const [questionCurrent, setCurrent] = useState(1);
    const [questionCount, setCount] = useState(0);
    const [isJoever, setGameOver] = useState(false);
    const [numCorrect, setCorrect] = useState(0);

    const resetGame = () => {
        setGameOver(false);
        setCurrent(1);
        setCorrect(0);
    }

    // setup questions, updates when isJoever is updated
    useEffect(() => {
        fetch(`../QuizBank/${quizFile}.json`)
            .then(response => response.json())
            .then(data => {
                setCount(data.questions.length);
                setComponents(data.questions.map((element, index) => {
                    return <Question key={index} questionNum={index + 1} questionCount={data.questions.length} questionObj={element} exitQuiz={exitQuiz} nextQuestion={nextQuestion} />
                }), [])
            });
    }, [isJoever]);

    // consolidated function that changes to the next question
    // and increments numCorrect if isCorrect is true
    // handles game end also
    const nextQuestion = (isCorrect = false) => {
        if (isCorrect)
            setCorrect((prevNum) => prevNum + 1);

        setCurrent((prevNum) => prevNum + 1);
    };

    // useEffect to await for end of game
    useEffect(() => {
        // we put a check for questionCount to prevent the useEffect from running on the first render
        // we check if questionCurrent is AFTER the last question

        if (questionCount !== 0 && questionCurrent === questionCount + 1) {
            console.log(`You got ${numCorrect} out of ${questionCount} correct!`);
            setGameOver(true);
        }
    }, [numCorrect, questionCurrent]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>{
            questionComponents ?

                (<div className='flex-col w-full md:p-4 md:w-7/12'>
                    {isJoever ? <QuizResult quizScore={numCorrect} quizTotal={questionCount} exitQuiz={exitQuiz} playAgain={resetGame} /> : questionComponents[questionCurrent - 1]}
                </div>)
                : <h1>Loading...</h1>
        } </>
    );
}

export default Quiz;