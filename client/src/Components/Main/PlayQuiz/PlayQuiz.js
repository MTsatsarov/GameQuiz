import { useState, useEffect } from "react/cjs/react.development";
import * as quizService from "../../../services/QuizServices/QuizServices"
import PlayQuestion from "../PlayQuestion/PlayQuestion";
import './PlayQuiz.css'
const PlayQuiz = (props) => {
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
        var obj = {
            id: quiz.id,
            questionsArray: []
        };
        [...e.target.querySelectorAll('input[type=radio]:checked')].map(x => obj.questionsArray.push({
            name: x.parentNode.parentNode.getAttribute('name'),
            answer: x.value
        }))
        const result = await quizService.GetResult(obj)
        console.log(result);

    }
    return (
        <article className='quizPlayWrapper'>
            <h3>{quiz.name}</h3>
            <form className='quizForm' onSubmit={submitFormHandler}>{quiz.questions.map((x,i) =>
            <PlayQuestion data={x} key={x.id}/>
                )}
                <button className='submitResult'>Submit</button> </form>

        </article>
    )
}

export default PlayQuiz