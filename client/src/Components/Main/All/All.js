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
            paginationModel: {}
        }
    }
    async getEvents(id) {
        var allQuizzes = await quiz.GetAll(id);
        this.setState({ quizzes: allQuizzes.quizzes, paginationModel: allQuizzes })
    }
    async getId(e) {
        const id = e.target.dataset.id;       
        await this.getEvents(Number(id))
    }
    async componentDidMount() {
        await this.getEvents(this.props.match.params.id);
    }
    render() {
        return (
            <section>
                <Pagination clickHandler={this.getId.bind(this)} nextPage={this.state.paginationModel.hasNextPage} prev={this.state.paginationModel.hasPreviousPage} currPage={this.state.paginationModel.currentPage} total={this.state.paginationModel.totalPages} />

                {this.state.quizzes.map(x => (<Quiz key={x.id} id={x.id} name={x.name} taken={x.taken ? x.taken : 0} grade={x.grade} votesCount={x.votesCount} creator={x.creatorName ? x.creatorName : "Admin-GameQuiz@Gmail.com"} />))}

                <Pagination clickHandler={this.getId.bind(this)} nextPage={this.state.paginationModel.hasNextPage} prev={this.state.paginationModel.hasPreviousPage} currPage={this.state.paginationModel.currentPage} total={this.state.paginationModel.totalPages} />
            </section >
        )
    }
}
export default All