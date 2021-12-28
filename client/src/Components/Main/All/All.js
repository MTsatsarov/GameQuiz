import "./All.css"
import * as quiz from "../../../services/QuizServices/QuizServices"
import Quiz from "../Quiz/Quiz";
import { Component } from "react";
import Pagination from "../../../shared/Pagination/Pagination";
import Spinner from "../../../shared/Spinner/Spinner";
class All extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quizzes: [],
            id: this.props.match.params.id,
            paginationModel: {},
            loading: false,
            error: false
        }
    }
    async getEvents(id) {
        var allQuizzes = await quiz.GetAll(id);
        console.log(allQuizzes);
        this.setState({ quizzes: allQuizzes.quizzes, paginationModel: allQuizzes })
    }
    async getId(e) {
        const id = e.target.dataset.id;
        await this.getEvents(Number(id))
    }
    async componentDidMount() {
        this.setState({ loading: true })

        await this.getEvents(this.props.match.params.id)

        this.setState({ loading: false })

    }
     removeQuizHandler(id) {
        var currQuizzes = this.state.quizzes;
        var arr = currQuizzes.filter(x => x.id !== id)
        this.setState(prevState => ({ ...prevState, quizzes: arr }))
    }
    render() {

        return (
            <section className="all">
                <Pagination clickHandler={this.getId.bind(this)} location={'all'} nextPage={this.state.paginationModel.hasNextPage} prev={this.state.paginationModel.hasPreviousPage} currPage={this.state.paginationModel.currentPage} total={this.state.paginationModel.totalPages} />
                <div className="quizzes-boxes-wrapper">
                    {this.state.quizzes.map(x => (<Quiz key={x.id} id={x.id} name={x.name} taken={x.taken ? x.taken : 0} grade={x.grade} votesCount={x.votesCount} creator={x.creatorName ? x.creatorName : "Admin-GameQuiz@Gmail.com"} removeQuizHandler={this.removeQuizHandler.bind(this)} />))}
                </div>
                <Spinner loading={this.state.loading} />
                <Pagination clickHandler={this.getId.bind(this)} location={'all'} nextPage={this.state.paginationModel.hasNextPage} prev={this.state.paginationModel.hasPreviousPage} currPage={this.state.paginationModel.currentPage} total={this.state.paginationModel.totalPages} />
            </section >
        )
    }
}

export default All