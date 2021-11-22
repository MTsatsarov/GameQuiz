import "./All.css"
import * as quiz from "../../../services/QuizServices/QuizServices"
import Quiz from "../Quiz/Quiz";
import { Component } from "react";

class All extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quizzes: [],
            id: this.props.match.params.id
        }
    }
    async componentDidMount() {
        var allQuizzes = await quiz.GetAll(this.state.id);
        this.setState({ quizzes: allQuizzes })
    }
    render() {
        return (
            <section>
                {this.state.quizzes.map(x => (<Quiz key={x.id} id={x.id} name={x.name} taken={x.taken ? x.taken : 0} grade={x.grade} votesCount={x.votesCount} creator={x.creator ? x.creator : "Admin-GameQuiz@Gmail.com"} />))}
            </section >
        )
    }
}
export default All