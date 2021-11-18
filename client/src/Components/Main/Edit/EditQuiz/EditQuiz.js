import EditQuestion from "../EditQuestion/EditQuestion"

function EditQuiz(props) {
    console.log(props.questions);
    return (
        <section >
            <form>
                <label className='quiz-name-label' htmlFor='QuizName'>Quiz name</label>
                <input className='name-input' id='QuizName' type='text' placeholder='Name' name='name' defaultValue={props.name} />
                <div id="dynamicInput">
                    {props.questions.map((q, i) => <EditQuestion key={i} info={q[i]}/>)}
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