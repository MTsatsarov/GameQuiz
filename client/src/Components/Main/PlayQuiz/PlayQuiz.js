import { useState, useEffect } from "react/cjs/react.development";
import * as quizService from "../../../services/QuizServices/QuizServices"
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
            name: x.parentNode.getAttribute('name'),
            answer: x.value
        }))
        console.log(obj);
        const result = await quizService.GetResult(obj)

    }
    return (
        <article className='quizPlayWrapper'>
            <h3>{quiz.name}</h3>
            <form className='quizForm' onSubmit={submitFormHandler}>{quiz.questions.map(x =>
                <>
                    <article className='questionArticle'>
                        <h4>{x.title}</h4>
                        <span name={x.title}>
                            <span>
                                <input type={"radio"} id={`${x.firstAnswer}`} name={x.title} value={`${x.firstAnswer}`} />
                                <label htmlFor={`${x.firstAnswer}`}>{`${x.firstAnswer}`}</label>
                            </span>
                            <span>
                                <input type={"radio"} id={`${x.secondAnswer}`} name={x.title} value={`${x.secondAnswer}`} />
                                <label htmlFor={`${x.secondAnswer}`}>{`${x.secondAnswer}`}</label>
                            </span>
                            <span>
                                <input type={"radio"} id={`${x.thirdAnswer}`} name={x.title} value={`${x.thirdAnswer}`} />
                                <label htmlFor={`${x.thirdAnswer}`}>{`${x.thirdAnswer}`}</label>
                            </span>
                            <span>
                                <input type={"radio"} id={`${x.fourthAnswer}`} name={x.title} value={`${x.fourthAnswer}`} />
                                <label htmlFor={`${x.fourthAnswer}`}>{`${x.fourthAnswer}`}</label>
                            </span>
                        </span>
                    </article>
                </>)}
                <button className='submitResult'>Submit</button> </form>

        </article>
    )
}

export default PlayQuiz