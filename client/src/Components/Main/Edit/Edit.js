import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { GetById } from "../../../services/QuizServices/QuizServices"
import EditQuiz from "./EditQuiz/EditQuiz";
const Edit = () => {
    var params = useParams();
    const [currQuiz, setQuiz] = useState({
        name: 'a',
        id: params.id,
        questions: []
    })
    useEffect(() => {
        async function GetQuiz() {
            var quiz = await GetById(params.id)
            setQuiz( prevState=> ({
                name: quiz.name,
                id: params.id,
                questions:quiz.questions.map(x => currQuiz.questions.concat({
                    questionName: x.title, firstAnswer: x.firstAnswer, secondAnswer: x.secondAnswer, thirdAnswer: x.thirdAnswer, fourthAnswer: x.fourthAnswer, correctIndex: x.correctIndex
                }))
            }))
        }
        GetQuiz()
    }, [currQuiz.questions,params.id])
    return (
        <>
            <EditQuiz name={currQuiz.name} questionsArray ={currQuiz.questions}/>
        </>
    )
}

export default Edit