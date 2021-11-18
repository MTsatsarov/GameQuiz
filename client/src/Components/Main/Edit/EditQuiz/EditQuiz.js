import EditQuestion from "../EditQuestion/EditQuestion"
import "./EditQuiz.css"

function EditQuiz(props) {
    return (

        <section className='editSection ' >
            <h2>Edit {props.name}</h2>
            <form className='editForm'>
                <label className='quiz-name-label' htmlFor='QuizName'>Quiz name</label>
                <input className='name-input' id='QuizName' type='text' value={props.name} ></input>
                <div id="editQuestion">
                    {props.questionsArray.map((q, i) => <EditQuestion key={i} info={q} />)}
                </div>
                {/* <span className='form-buttons'>
                        <button id='addQuestion' type='button' onClick={this.createQuestion.bind(this)}>Add Question</button>
                        <button id='create-quiz-btn' type='submit'>Create</button>
                    </span> */}
            </form>
        </section>
    )
}

export default EditQuiz