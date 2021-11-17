import CreateAnswer from "../Answer/CreateAnswer"
import "./CreateQuestion.css"
const CreateQuestion =(props) =>
{
        return(
            <article className='question-create'>
                <h2>Question: {props.count}</h2>
            <textarea maxLength='150' type='textarea' placeholder="Please enter question Title" />
            <CreateAnswer/>
            </article>
        )
}
export default CreateQuestion