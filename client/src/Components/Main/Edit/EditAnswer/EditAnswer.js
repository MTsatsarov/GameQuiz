import { useState } from "react";
import Error from "../../../../shared/Error/Error";
import "./EditAnswer.css"
export const EditAnswer = ({ questionId, answer, correct, changeCorrectAnswer, changeAnswerName }) => {
    var [isValid, setIsValid] = useState(true)
    const changeHandler = (e, questionId, answerId) => {
        var value = e.target.value.length
        if (value < 1 || value > 150) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
        changeAnswerName(e, questionId, answerId)

    }
    return (
        <div className='answer'>
            <textarea maxLength={150}  spellCheck='true' type='text' name='answerName' id={answer.id} defaultValue={answer.title} onChange={(e) => changeHandler(e, questionId, answer.id)} />
            {!isValid ? <Error message='Answer length must be between 1 and 150 characters long' /> : ''}
            <input className="radio-input" type='radio' defaultValue={answer.title} name='isCorrect' onClick={() => changeCorrectAnswer(questionId, answer.title)} defaultChecked={correct} />
        </div>
    )
}