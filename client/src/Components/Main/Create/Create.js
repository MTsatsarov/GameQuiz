import { Component } from "react";
import CreateQuestion from "./Question/CreateQuestion";
import *  as quizService from "../../../services/QuizServices/QuizServices"
import Error from "../../../shared/Error/Error";
import "./Create.css"
import { CreateContext } from "../../../contexts/CreateContext";

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: [],
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
       console.log(quiz);
       await quizService.Create(quiz)
        this.props.history.push("/all")
    }
    render() {
        return (
            <section className='create-quiz-section' onSubmit={this.handleCreateQuiz.bind(this)}>
                <form>

                    <label className='quiz-name-label' htmlFor='QuizName'>Quiz name</label>
                    <input className='name-input' id='QuizName' type='text' placeholder='Name' name='quizName' onChange={this.context.changeQuizName} />
                    {!this.context.quizName.isValid && <Error message={'Name must be between 5 and 50 characters'} />}

                    <div id="dynamicInput">
                        {this.state.questions.map((q, i) => <CreateQuestion key={i} count={i + 1}/>)}
                    </div>
                    <span className='form-buttons'>
                        <button id='addQuestion' type='button' onClick={this.createQuestion.bind(this)}>Add Question</button>
                        <button id='create-quiz-btn' type='submit'>Create</button>
                    </span>
                </form>
            </section>
        )
    }
}
Create.contextType = CreateContext
export default Create