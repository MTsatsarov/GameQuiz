import { Component } from "react/cjs/react.production.min"
import Question from "./Question/Question";
import *  as quizService from "../../../services/QuizServices/QuizServices"
import "./Create.css"

class Create extends Component {
    constructor() {
        super()
        this.state = {
            quiz: {
                name: '',
            },
            questions: []
        }
    }
    createQuestion() {
        var newQuestion = <Question />
        this.setState({ questions: this.state.questions.concat([newQuestion]) });
    };
    handleChange(e) {
        this.setState(
            {
                quiz: { name: e.target.value }
            }
        )
    }
    async handleSubmit(e) {
        e.preventDefault();
        let questions = [...document.querySelectorAll('article')];
        var obj = {
            quizTitle: '',
            questionsArray: [],
        }
        obj.quizTitle = e.target.children[1].value;
        questions.map(x => obj.questionsArray.push(
            {

                name: x.children[1].value,
                firstAnswer: x.children[3].value,
                secondAnswer: x.children[5].value,
                thirdAnswer: x.children[7].value,
                fourthAnswer: x.children[9].value,
                correctAnswer: x.children[11].value

            }))
console.log(obj);
        var result = await quizService.Create(obj)
    }
    render() {
        return (
            <section className='create-quiz-section' onSubmit={this.handleSubmit.bind(this)}>
                <form>
                    <label className='quiz-name-label' htmlFor='QuizName'>Quiz name</label>
                    <input className='name-input' id='QuizName' type='text' placeholder='Name' name='name' value={this.state.quiz.name} onChange={this.handleChange.bind(this)} />
                    <div id="dynamicInput">
                        {this.state.questions.map((q, i) => <Question key={i} count={i + 1} />)}
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

export default Create