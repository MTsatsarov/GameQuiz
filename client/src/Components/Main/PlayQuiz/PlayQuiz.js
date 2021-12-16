import { useState, useEffect, useContext } from "react/cjs/react.development";
import * as quizService from "../../../services/QuizServices/QuizServices"
import PlayQuestion from "../PlayQuestion/PlayQuestion";
import Result from "../Create/Result/Result";
import QuestionSwitchBox from "./QuestionsSwitchBox/QuestionsSwitchBox";
import { PlayContext } from "../../../contexts/PlayContext";
import {AuthContext} from "../../../contexts/AuthContext"
import './PlayQuiz.css'

const PlayQuiz = (props) => {
    var context = useContext(PlayContext);
    var authContext = useContext(AuthContext)
    let [isFinished, setIsFinished] = useState(false)
    const [result, setResult] = useState({
        points: '',
        percentage: 0,
        maxScore: 0
    })
    const [quiz, setQuiz] = useState({
        id: '',
        name: '',
        questions: [],
        currentQuestion: 0
    });
    useEffect(() => {
        async function fetchData() {
            let result = await quizService.GetById(props.match.params.id)
            if (result.message === '401') {
                authContext.logout();
                props.history.push('/login')
            } else {

                setQuiz(oldState => ({ ...oldState, id: result.id, name: result.name, questions: result.questions }))
            }
        }
        fetchData();
    }, [props.history, props.match.params.id,authContext])

    async function submitFormHandler(e) {
        e.preventDefault();
        var array = [];
        Object.keys(context.checkedAnswer).map(x => array.push({ name: x, answer: context.checkedAnswer[x] }))
        if (array.length !== quiz.questions.length) {
            alert('All questions must be answered')
            return;
        }
        var user = localStorage.getItem('id');
        var obj = {
            id: quiz.id,
            user: user,
            questionsArray: array
        };
        var score = await quizService.GetResult(obj)
        setResult(prevResult => ({ ...prevResult, points: score.score, percentage: score.percentage, maxScore: score.maxScore }))
        context.setCheckedAnswer({})
        setIsFinished(isFinished = !isFinished)
    }
    const switchAnswer = (e) => {
        var question = Number(e.target.getAttribute('data-question'));
        if (question !== quiz.currentQuestion) {
            setQuiz(prevState => ({ ...prevState, currentQuestion: question }))
        }
    }

    return (
        !isFinished ?
            <article className='quizPlayWrapper'>
                <h3>{quiz.name}</h3>

                <form className='quizForm' onSubmit={submitFormHandler}>
                    <div className="submit-dialog">
                        < article className="questions-change-box" >
                            {quiz.questions.map((x, i) => <QuestionSwitchBox key={x.id} questionName={x.name}
                                currentQuestion={quiz.currentQuestion} boxNum={i} clickHandler={switchAnswer} />)}
                        </article>
                        {quiz.currentQuestion === quiz.questions.length - 1 ? <button className='submitResult'>Submit</button> : ''}
                    </div>
                    {quiz.questions.length > 0 ? <PlayQuestion data={quiz.questions[quiz.currentQuestion]} key={quiz.questions[quiz.currentQuestion].id} checked={quiz.questions[quiz.currentQuestion].checked} /> : ''}
                </form>
            </article>
            : <>
                <Result points={result.points} name={quiz.name} percentage={result.percentage} maxScore={result.maxScore} userName={localStorage.getItem('userName')} />
            </>
    )
}
export default PlayQuiz