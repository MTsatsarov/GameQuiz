import { Component } from "react";
import CreateQuestion from "./Question/CreateQuestion";
import *  as quizService from "../../../services/QuizServices/QuizServices"
import Error from "../../../shared/Error/Error";
import "./Create.css"
import { AuthContext } from "../../../contexts/AuthContext";

class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: [],
            isValidName: true
        }
    }
    createQuestion() {
        var newQuestion = <CreateQuestion />
        this.setState({ questions: this.state.questions.concat([newQuestion]) });
    };
    handleNameChange(e) {
        if (e.target.value.length < 5 || e.target.value.length > 50) {
            this.setState({ isValidName: false })
        } else {
            this.setState({ isValidName: true })
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        let q = [...document.querySelectorAll('article')];
        var obj = {
            name: '',
            questions: [],
            creator: this.context.user.id
        }
        obj.name = e.target.querySelector('input[name=quizName]').value

        q.map(x => obj.questions.push({
            title: x.querySelector('textarea[name=title]').value,
            answerArray: Array.from(x.querySelectorAll('.myAnswer')).map(y => y.querySelector('input[type=text]').value),
            correct: x.querySelector('input[type=checkbox]').value
        }))
        await quizService.Create(obj)
        this.props.history.push("/all")
    }
    render() {

        return (
            <section className='create-quiz-section' onSubmit={this.handleSubmit.bind(this)}>
                <form>

                    <label className='quiz-name-label' htmlFor='QuizName'>Quiz name</label>
                    <input className='name-input' id='QuizName' type='text' placeholder='Name' name='quizName' onBlur={this.handleNameChange.bind(this)} />
                    {!this.state.isValidName && <Error message={'Name must be between 5 and 50 characters'} />}

                    <div id="dynamicInput">
                        {this.state.questions.map((q, i) => <CreateQuestion key={i} count={i + 1} />)}
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
Create.contextType=AuthContext
export default Create