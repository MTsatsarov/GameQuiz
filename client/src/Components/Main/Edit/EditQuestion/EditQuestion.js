import './EditQuestion.css'
import { EditAnswer } from '../EditAnswer/EditAnswer';
function EditQuestion({ question, number }) {
    return (
        <article className='question-create' id={question.id}>
            <h2>Question: {number}</h2>
            <textarea name='QuestionName' maxLength='150' type='textarea' placeholder="Please enter question Title" defaultValue={question.title} />
            {question.answers.map(x => <EditAnswer key={x.id} answer={x} correct={x.id == question.correctAnswer ? true : false} />)}
        </article>
    )
}

export default EditQuestion