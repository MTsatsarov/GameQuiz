import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { GetById } from "../../../services/QuizServices/QuizServices"
import EditQuiz from "./EditQuiz/EditQuiz";
const Edit = (props) => {
    const [currQuiz, setQuiz] = useState({
        name: 'a',
        id: props.match.params.id,
        questions: []
    })
    useEffect(() => {
        async function GetQuiz() {
            var quiz = await GetById(props.match.params.id)
            setQuiz( prevState=> ({
                name: quiz.name,
                id: props.match.params.id,
                questions:quiz.questions
            }))
        }
        GetQuiz()
    }, [props.match.params.id])
    return (
        <>
            <EditQuiz name={currQuiz.name} id={currQuiz.id} questionsArray ={currQuiz.questions}/>
        </>
    )
}

export default Edit