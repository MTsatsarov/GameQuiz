import { useState, useEffect } from "react";
import { GetById } from "../../../services/QuizServices/QuizServices"
import EditQuiz from "./EditQuiz/EditQuiz";
import Spinner from "../../../shared/Spinner/Spinner";
import "./Edit.css"
const Edit = (props) => {
    const [loading, setLoading] = useState(true);
    const [currQuiz, setQuiz] = useState({
        name: 'a',
        id: props.match.params.id,
        questions: []
    })
    useEffect(() => {
        async function GetQuiz() {
            var quiz = await GetById(props.match.params.id)
            setLoading(false);
            setQuiz(prevState => ({
                ...prevState,
                name: quiz.name,
                id: props.match.params.id,
                questions: quiz.questions
            }))
        }
        GetQuiz()
       
    }, [props])

    return (
        !loading ?
            <EditQuiz history={props.history} name={currQuiz.name} id={currQuiz.id} questionsArray={currQuiz.questions} />
            : <span className="loading-span"> <Spinner /></span>

    )
}
export default Edit