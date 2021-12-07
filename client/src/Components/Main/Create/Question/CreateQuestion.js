import CreateAnswer from "../Answer/CreateAnswer"
import "./CreateQuestion.css"
import { useState } from "react"
import Error from "../../../../shared/Error/Error"
const CreateQuestion = (props) => {
    const [isValid, setIsValid] = useState(false)
    const [answerArray, setAnswerArray] = useState({
        answers:[]
    })
    var nameChangeHandler = (e) => {
        e.target.value.length < 10 || e.target.value.length > 150 ? setIsValid(false) : setIsValid(true)

    }
    function addAnswer() {
        var newItem = <CreateAnswer />;
        setAnswerArray(prevState=>({...prevState, answers: prevState.answers.concat([newItem])}))
    }
    return (
        <article className='question-create'>
            <h2>Question: {props.count}</h2>
            <textarea maxLength='150' type='textarea' placeholder="Please enter question Title" onBlur={nameChangeHandler} name ='title'/>
            {!isValid && <Error message={'Question must be between 10 and 150 characters long'} />}
            {<button type='button' onClick={addAnswer}>ADD ANSWER</button>}
            <div className='answers'>
            {answerArray.answers.map((x,i)=><CreateAnswer key={i} number={i+1}/>)}
            </div>
        </article>
    )
}
export default CreateQuestion