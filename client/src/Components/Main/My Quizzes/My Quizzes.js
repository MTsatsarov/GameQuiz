import { useState, useEffect } from "react"
import * as quizService from "../../../services/QuizServices/QuizServices"
import Quiz from "../Quiz/Quiz"
const MyQuizzes = () => {
    const [quizzes, setQuizzes] = useState({
        userQuizzes: []
    })
    useEffect(() => {
        async function GetUserQuizzes() {
            var userId = localStorage.getItem('id')
            var result = await quizService.GetAllByUser(userId);
            setQuizzes({
                userQuizzes: result
            })
        }
        GetUserQuizzes();
    }, [])
    return (

        quizzes.userQuizzes.map(x => (<Quiz key={x.id} id={x.id} name={x.name} taken={x.taken ? x.taken : 0} grade={x.grade} votesCount={x.votesCount} creator={x.creatorName ? x.creatorName : "Admin-GameQuiz@Gmail.com"} />))
    )
}
export default MyQuizzes