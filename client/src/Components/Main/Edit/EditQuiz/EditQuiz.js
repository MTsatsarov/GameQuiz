import Error from "../../../../shared/Error/Error.js"
import EditQuestion from "../EditQuestion/EditQuestion.js"
import * as quizService from "../../../../services/QuizServices/QuizServices.js"

import { useState } from "react"
import "./EditQuiz.css"

function EditQuiz(props) {
    const [name, setName] = useState('');
    const [isValid, setIsValid] = useState(false)
    const nameChangeHandler = (e) => {
        var value = e.target.value
        setName(value);
        if (value < 5 || value > 50) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        var obj = {
            id: props.id,
            name: document.getElementById('QuizName').value,
            questions: [],
            correct: '',
        }

        Array.from(e.target.querySelectorAll('.question-create')).map(x => obj.questions.push({
            id: x.id,
            name: x.querySelector('textArea').value,
            answers: Array.from(x.querySelectorAll('.answer>input[type=text]')).map(a => ({ id: a.id, name: a.value }))
            , correct: e.target.querySelector('input[type=checkbox]:checked').value
        }));
        await quizService.Update(props.id, obj);
    }
    return (
        <section className='editSection ' >
            <h2>Edit {props.name}</h2>
            <form className='editForm' onSubmit={onSubmitHandler}>
                <label className='quiz-name-label' htmlFor='QuizName'>Quiz name</label>
                <input className='name-input' id='QuizName' name='QuizName' type='text' defaultValue={props.name} onBlur={nameChangeHandler} />
                {!isValid && <Error message={'Quiz name must be between 5 and 50 characters long'} />}
                <div id="editQuestion">
                    {props.questionsArray.map((q, i) => <EditQuestion key={q.id} question={q} number={i + 1} />)}
                </div>
                <span className='form-buttons'>
                    <button id='update'>Update</button>
                </span>
            </form>
        </section>
    )
}

export default EditQuiz