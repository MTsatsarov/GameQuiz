import { Component } from "react";
import CreateQuestion from "./Question/CreateQuestion";
import *  as quizService from "../../../services/QuizServices/QuizServices"
import Error from "../../../shared/Error/Error";
import "./Create.css"
import { CreateContext } from "../../../contexts/CreateContext";
import Spinner from "../../../shared/Spinner/Spinner"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: [],
            loading: false,
        }
    }
    createQuestion() {
        var newQuestion = <CreateQuestion />
        this.context.createQuestion(newQuestion);
        this.setState({ questions: this.state.questions.concat([newQuestion]) });
    };
    handleCreateQuiz = async (e) => {

        e.preventDefault();
        var quiz = this.context.createQuiz();

        if (quiz) {
            this.setState({ loading: true })
            const result = await quizService.Create(quiz)
            this.setState({ loading: false })
            console.log(result.message);
            if (result.message === '401') {
                this.props.history.push("/login")

            }
            this.props.history.push("/all")
        }

    }
    render() {
        return (
            <div>
            <section className='create-quiz-section' onSubmit={this.handleCreateQuiz.bind(this)}>
                {!this.state.loading ?
                    <form>

                        <label className='quiz-name-label' htmlFor='QuizName'>Quiz name</label>
                        <input className='name-input' id='QuizName' type='text' placeholder='Name' name='quizName' onChange={this.context.changeQuizName} />
                        {!this.context.quizName.isValid && <Error message={'Name must be between 5 and 50 characters'} />}

                        <div id="dynamicInput">
                            {this.state.questions.map((q, i) => <CreateQuestion key={i} count={i + 1} />)}
                        </div>
                        <span className='form-buttons'>
                            <button id='addQuestion' type='button' onClick={this.createQuestion.bind(this)}>Add Question</button>
                            <button id='create-quiz-btn' type='submit'>Create</button>
                        </span>
                    </form> :
                    <Spinner loading={this.state.loading} />}
            </section>
            </div>
        )
    }
}
Create.contextType = CreateContext
export default Create