import './EditQuestion.css'
import { EditAnswer } from '../EditAnswer/EditAnswer';
function EditQuestion({ question, number,nameChange,changeCorrectAnswer,changeAnswerName }) {
    return (
        <article className='question-create' id={question.id}>
            <h2>Question: {number}</h2>
            <textarea onChange={(e)=>nameChange(e,question.id)} name='QuestionName' maxLength='150' type='textarea' placeholder="Please enter question Title" defaultValue={question.title} />
            
            {question.answers.map(x => <EditAnswer changeCorrectAnswer={changeCorrectAnswer} questionId={question.id} key={x.id} answer={x} correct={x.id === question.correct ? true : false} changeAnswerName={changeAnswerName} />)}
        </article>
    )
}

export default EditQuestion