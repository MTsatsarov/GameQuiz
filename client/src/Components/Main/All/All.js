import "./All.css"
import * as quiz from "../../../services/QuizServices/QuizServices"
import Quiz from "../Quiz/Quiz";
import { Component } from "react";

class All extends Component {
    constructor() {
        super()

        this.state = {
            quizzes: []
        }
    }
componentDidMount() {
    var allQuizzes = quiz.GetAll();
    this.setState({quizzes:allQuizzes})

}
    render() {
        return (
            <section>
                {this.quizzes.map(x => (<Quiz key={x.id} name={x.name} taken={x.taken} grade={x.taken} votesCount={x.votesCount} />))}

            </section >
        )
    }
}
export default All