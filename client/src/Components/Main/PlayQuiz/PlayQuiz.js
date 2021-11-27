import { useState, useEffect } from "react/cjs/react.development";
import * as quizService from "../../../services/QuizServices/QuizServices"
import PlayQuestion from "../PlayQuestion/PlayQuestion";
import './PlayQuiz.css'
const PlayQuiz = (props) => {

    let [isFinished, setIsFinished] = useState(false)
    const [quiz, setQuiz] = useState({
        id: '',
        name: '',
        questions: []
    });
    useEffect(() => {
        async function fetchData() {
            let result = await quizService.GetById(props.match.params.id)
            setQuiz(oldState => ({ ...oldState, id: result.id, name: result.name, questions: result.questions }))
        }
        fetchData()
    }, [props.match.params.id])
    async function submitFormHandler(e) {
        e.preventDefault();
        var user = localStorage.getItem('id');
        var obj = {
            id: quiz.id,
            user: user,
            questionsArray: []
        };

        [...e.target.querySelectorAll('input[type=radio]:checked')].map(x => obj.questionsArray.push({
            name: x.parentNode.parentNode.getAttribute('name'),
            answer: x.value
        }))
        const result = await quizService.GetResult(obj)

        setIsFinished(isFinished = !isFinished)
    }
    return (
        !isFinished ?
            <article className='quizPlayWrapper'>
                <h3>{quiz.name}</h3>
                <form className='quizForm' onSubmit={submitFormHandler}>
                    {quiz.questions.map((x, i) =>
                        <PlayQuestion data={x} key={x.id} />
                    )}
                    <button className='submitResult'>Submit</button>
                </form>
            </article>
            : <h2>HELLOO</h2>
    )
}

export default PlayQuiz