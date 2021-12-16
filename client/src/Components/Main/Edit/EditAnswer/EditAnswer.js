import { useState } from "react";
import Error from "../../../../shared/Error/Error";
export const EditAnswer = ({ questionId, answer, correct, changeCorrectAnswer, changeAnswerName }) => {
    var [isValid, setIsValid] = useState(true)
    const changeHandler = (e, questionId, answerId) => {
        var value = e.target.value.length
        if (value < 10 || value > 150) {
            setIsValid(false)
            return;
        } else {
            setIsValid(true)
        }
        changeAnswerName(e, questionId, answerId)

    }
    return (
        <div className='answer'>
            <input type='text' name='answerName' id={answer.id} defaultValue={answer.title} onChange={(e) => changeHandler(e, questionId, answer.id)} />
            {!isValid ? <Error message='Answer length must be between 10 and 150 characters long' /> : ''}
            <input type='radio' defaultValue={answer.title} name='isCorrect' onClick={() => changeCorrectAnswer(questionId, answer.title)} defaultChecked={correct} />
        </div>
    )
}