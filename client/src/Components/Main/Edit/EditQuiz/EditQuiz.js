import EditQuestion from "../EditQuestion/EditQuestion"

function EditQuiz(props) {
    console.log(props.questionsArray);
    return (
        <section >
            <form>
                <label className='quiz-name-label' htmlFor='QuizName'>Quiz name</label>
                <input className='name-input' id='QuizName' type='text' value={props.name} ></input>
                <div id="dynamicInput">
                    {props.questionsArray.map((q, i) => <EditQuestion key={i} info={q}  />)}
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