import Answer from "../Answer/Answer"
import "./Question.css"
const Question =(props) =>
{
        return(
            <article className='question-create'>
                <h2>Question: {props.count}</h2>
            <textarea maxLength='150' type='textarea' placeholder="Please enter question Title" />
            <Answer/>
            </article>
        )
}
export default Question