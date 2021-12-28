import './EditQuestion.css'
import { EditAnswer } from '../EditAnswer/EditAnswer';
import Error from '../../../../shared/Error/Error';
function EditQuestion({ question, number,nameChange,changeCorrectAnswer,changeAnswerName }) {
    return (
        <article className='question-create' id={question.id}>
            <h2>Question: {number}</h2>
            <textarea onChange={(e)=>nameChange(e,question.id)} name='QuestionName' maxLength='150' type='textarea' placeholder="Please enter question Title" defaultValue={question.title} />
            {question.title.length<5 ? <Error message={'Name must be between 5 and 150 characters long'}/> : ''}
            <section className='answers-wrapper'>
            {question.answers.map(x => <EditAnswer changeCorrectAnswer={changeCorrectAnswer} questionId={question.id} key={x.id} answer={x} correct={x.id === question.correct ? true : false} changeAnswerName={changeAnswerName} />)}
            </section>
        </article>
    )
}

export default EditQuestion