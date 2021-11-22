import "./All.css"
import * as quiz from "../../../services/QuizServices/QuizServices"
import Quiz from "../Quiz/Quiz";
import { Component } from "react";
import Pagination from "../../../shared/Pagination/Pagination";

class All extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quizzes: [],
            id: this.props.match.params.id,
            paginationModel:{}
        }
    }
    async componentDidMount() {
        var allQuizzes = await quiz.GetAll(this.state.id);
        this.setState({ quizzes: allQuizzes.quizzes,paginationModel:allQuizzes })
        console.log(allQuizzes);
    }
    render() {
        return (
            <section>
                <Pagination nextPage = {this.state.paginationModel.hasNextPage} prev = {this.state.paginationModel.hasPreviousPage} currPage = {this.state.paginationModel.currentPage} total = {this.state.paginationModel.totalPages}/>

                {this.state.quizzes.map(x => (<Quiz key={x.id} id={x.id} name={x.name} taken={x.taken ? x.taken : 0} grade={x.grade} votesCount={x.votesCount} creator={x.creator ? x.creator : "Admin-GameQuiz@Gmail.com"} />))}

                <Pagination nextPage = {this.state.paginationModel.hasNextPage} prev = {this.state.paginationModel.hasPreviousPage} currPage = {this.state.paginationModel.currentPage} total = {this.state.paginationModel.totalPages}/>

            </section >
        )
    }
}
export default All