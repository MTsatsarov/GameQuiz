import Error from "../../../../shared/Error/Error.js"
import EditQuestion from "../EditQuestion/EditQuestion.js"
import * as quizService from "../../../../services/QuizServices/QuizServices.js"
import { useState, useEffect } from "react"
import QuestionSwitchBox from "../../PlayQuiz/QuestionsSwitchBox/QuestionsSwitchBox"
import "./EditQuiz.css"

function EditQuiz(props) {
    const [isReadyToUpdate, setIsReadyToUpdate] = useState(true);
    const [isValid, setIsValid] = useState(true)
    const [quiz, setQuiz] = useState({
        quizName: '',
        questions: [],
        currentQuestion: 0
    });
    const nameChangeHandler = (e) => {
        var value = e.target.value
        if (value.length < 5 || value.length > 50) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
        setQuiz(prevState => ({ ...prevState, quizName: value }))

    }
    const submitFormHandler = async (e) => {
        e.preventDefault();
        var obj = {
            id: props.id,
            name: quiz.quizName,
            questions: quiz.questions,
        }
        await quizService.Update(props.id, obj);
        props.history.push("/all");
    }
    useEffect(() => {
        if (!isValid || quiz.questions.some(x => x.title.length < 5 || x.title.length > 150 || x.correct === '') || quiz.questions.some(x => x.answers.some(a => a.title.length < 1 || a.title.length > 150))) {
            setIsReadyToUpdate(false);
        } else (setIsReadyToUpdate(true))
    }, [quiz,isValid])
    useEffect(() => {
        setQuiz(prevState => ({ ...prevState, quizName: props.name, questions: props.questionsArray }))
    }, [props.questionsArray, props.name])

    const changeQuestionNameHandler = (e, question) => {
        var currQuestion = quiz.questions.find(x => x.id === question);
        currQuestion.title = e.target.value
        setQuiz(prevState => ({ ...prevState }))

    }
    const changeCorrectAnswer = (question, answer) => {
        var currQuestion = quiz.questions.find(x => x.id === question);
        currQuestion.correct = answer;
        setQuiz(prevState => ({ ...prevState }))


    }
    const switchAnswer = (e) => {
        var question = Number(e.target.getAttribute('data-question'));
        if (question !== quiz.currentQuestion) {
            setQuiz(prevState => ({ ...prevState, currentQuestion: question }))
        }
    }
    const changeAnswerName = (e, questionId, answerId) => {
        var answer = quiz.questions.find(x => x.id === questionId).answers.find(a => a.id === answerId);
        answer.title = e.target.value;
        setQuiz(prevState => ({ ...prevState, questions: quiz.questions }))
    }
    return (

        <section className='editSection ' >

            <h2>Edit {props.name}</h2>
            <form className='editForm' onSubmit={submitFormHandler}>
                <label className='quiz-name-label' htmlFor='QuizName'>Quiz name</label>
                <input className='name-input' id='QuizName' name='QuizName' defaultValue={quiz.quizName} onChange={nameChangeHandler} />

                {!isValid && <Error message={'Quiz name must be between 5 and 50 characters long'} />}
                <div id="editQuestion">
                    <div className="question-redirection">
                        {quiz.questions.map((x, i) => <QuestionSwitchBox key={i} questionName={x.title} currentQuestion={quiz.currentQuestion} boxNum={i} clickHandler={switchAnswer} />)}
                    </div>
                    {quiz.questions.length > 0 ?
                        <EditQuestion changeCorrectAnswer={changeCorrectAnswer} key={quiz.questions[quiz.currentQuestion].id} question={quiz.questions[quiz.currentQuestion]} nameChange={changeQuestionNameHandler} number={quiz.currentQuestion + 1} changeAnswerName={changeAnswerName} />
                        : ''}
                </div>
                <span className='form-buttons'>
                    <button disabled={!isReadyToUpdate} id='update'>Update</button>
                </span>
            </form>

        </section>
    )
}

export default EditQuiz