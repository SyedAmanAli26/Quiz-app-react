import React, { useContext, useState } from 'react'
import { Questions } from '../Helpers/QuesBank'
import { QuizContext } from '../Helpers/Contexts';

function Quiz() {
    const {score, setScore, setGameState} = useContext(QuizContext)

    const [currQues, setCurrQues] = useState(0);
    const [optonChosen, setOptionChosen] = useState('')

    const nextQues = () =>{
        if(Questions[currQues].answer == optonChosen){
            setScore(score + 1)
        }
        setCurrQues(currQues+1)
    }

    const finishQuiz = () =>{
        if(Questions[currQues].answer == optonChosen){
            setScore(score + 1)
        }
        setGameState('endscreen')

    }

  return (
    <div className='Quiz'>
        <h1>{Questions[currQues].prompt}</h1>
        <div className="options">
            <button onClick={() => setOptionChosen('A')}>{Questions[currQues].optionA}</button>
            <button onClick={() => setOptionChosen('B')}>{Questions[currQues].optionB}</button>
            <button onClick={() => setOptionChosen('C')}>{Questions[currQues].optionC}</button>
            <button onClick={() => setOptionChosen('D')}>{Questions[currQues].optionD}</button>
        </div>
        {currQues == Questions.length - 1 ? (<button onClick={finishQuiz}>Finish Quiz</button>) : ( <button onClick={nextQues}>Next Question</button>)}

    </div>
  )
}

export default Quiz