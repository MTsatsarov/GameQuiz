import { useState, useEffect } from "react/cjs/react.development";
import * as quizService from "../../../services/QuizServices/QuizServices"
const PlayQuiz = (props) => {
    const [quiz, setQuiz] = useState({
        id: '',
        name: '',
        questions: []
    });
    useEffect(async () => {
        let result = await quizService.GetById(props.match.params.id)
        setQuiz(oldState => ({ ...oldState, id: result.id, name: result.name, questions: result.questions }))
    }, [])
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
        <>
            <h3>{quiz.name}</h3>
            <form onSubmit={submitFormHandler}>{quiz.questions.map(x =>
                <>
                    <h4>{x.title}</h4>
                    <span name={x.title}>
                        <input type={"radio"} id={`${x.firstAnswer}`} name={x.title} value={`${x.firstAnswer}`} />
                        <label htmlFor={`${x.firstAnswer}`}>{`${x.firstAnswer}`}</label>
                        <input type={"radio"} id={`${x.secondAnswer}`} name={x.title} value={`${x.secondAnswer}`} />
                        <label htmlFor={`${x.secondAnswer}`}>{`${x.secondAnswer}`}</label>
                        <input type={"radio"} id={`${x.thirdAnswer}`} name={x.title} value={`${x.thirdAnswer}`} />
                        <label htmlFor={`${x.thirdAnswer}`}>{`${x.thirdAnswer}`}</label>
                        <input type={"radio"} id={`${x.fourthAnswer}`} name={x.title} value={`${x.fourthAnswer}`} />
                        <label htmlFor={`${x.fourthAnswer}`}>{`${x.fourthAnswer}`}</label>
                    </span>
                </>)}
                <button>Submit</button> </form>

        </>
    )
}

export default PlayQuiz