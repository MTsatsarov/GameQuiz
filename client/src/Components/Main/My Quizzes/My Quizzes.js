import { useState, useEffect } from "react"
import * as quizService from "../../../services/QuizServices/QuizServices"
import Pagination from "../../../shared/Pagination/Pagination"
import Quiz from "../Quiz/Quiz"
import "./My Quizzes.css"
const MyQuizzes = (props) => {
    const [quizzes, setQuizzes] = useState({
        quizzes: [],
        paginationModel: {},
    })
    console.log(props);
    useEffect(() => {

        GetUserQuizzes();
    }, [])
    async function GetUserQuizzes(id) {
        console.log(id);
        var userId = localStorage.getItem('id')
        var result = await quizService.GetAllByUser(userId,id);
        console.log('returned');
        setQuizzes( prevState=> ({
            ...prevState,
            quizzes: result.quizzes,
            paginationModel: result,
        }))
     
    }  const  getId=async(e) => {
        const id = e.target.dataset.id;
        await GetUserQuizzes(id)
    }
    return (
        <>
            <Pagination  clickHandler={getId} nextPage={quizzes.paginationModel.hasNextPage} location ={'my-quizzes'} prev={quizzes.paginationModel.hasPreviousPage} currPage={quizzes.paginationModel.currentPage} total={quizzes.paginationModel.totalPages} />
            <article className="user-quizzes-wrapper">
                {quizzes.quizzes.map(x => (<Quiz key={x.id} id={x.id} name={x.name} taken={x.taken ? x.taken : 0} grade={x.grade} votesCount={x.votesCount} creator={x.creatorName ? x.creatorName : "Admin-GameQuiz@Gmail.com"} />))}
            </article>
            <Pagination clickHandler={getId} nextPage={quizzes.paginationModel.hasNextPage} location ={'my-quizzes'} prev={quizzes.paginationModel.hasPreviousPage} currPage={quizzes.paginationModel.currentPage} total={quizzes.paginationModel.totalPages} />
        </>
    )
}
export default MyQuizzes