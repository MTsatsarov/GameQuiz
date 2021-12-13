import CreateAnswer from "../Answer/CreateAnswer"
import "./CreateQuestion.css"
import { useState, useContext } from "react"
import Error from "../../../../shared/Error/Error"
import { CreateContext } from "../../../../contexts/CreateContext"
const CreateQuestion = (props) => {
    const [questionName, setQuestionName] = useState({
        name: '',
        isValid: false
    })
    const [answerArray, setAnswerArray] = useState({
        answers: []
    })
    var context = useContext(CreateContext)

    var nameChangeHandler = (e) => {
        var currentName = e.target.value;
        currentName.length < 10 || currentName > 150 ?
            setQuestionName({ name: currentName, isValid: false }) :
            setQuestionName({ name: currentName, isValid: true })
        context.handleQuestionChange(props.count - 1, currentName, answerArray.answers.length)
    }

    function addAnswer() {
        var newItem = <CreateAnswer />;
        setAnswerArray(prevState => ({ ...prevState, answers: prevState.answers.concat([newItem]) }))
        context.addAnswer(newItem,props.count-1);
    }
    return (
        <article className='question-create'>
            <h2>Question: {props.count}</h2>
            <textarea maxLength='150' type='textarea' placeholder="Please enter question Title" onChange={nameChangeHandler} name={`question${props.count-1}`} />
            {!questionName.isValid && <Error message={'Question must be between 10 and 150 characters long'} />}
            {<button type='button' onClick={addAnswer}>ADD ANSWER</button>}
            <div className='answers'>
                {answerArray.answers.map((x, i) => <CreateAnswer key={i} number={i + 1} questionIndex = {props.count-1}/>)}
            </div>
        </article>
    )
}

export default CreateQuestion