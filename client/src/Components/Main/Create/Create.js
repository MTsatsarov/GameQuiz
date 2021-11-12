import { Component } from "react/cjs/react.production.min"
import Question from "./Question/Question";
import *  as quizService from "../../../services/QuizServices/QuizServices"

class Create extends Component {
    constructor() {
        super()
        this.state = {
            quiz: {
                name: 'Gosho',
                questions: []
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
                quiz:
                {
                    name: e.target.value
                }
            }
        )
    }
  async  handleSubmit(e) {
        e.preventDefault();
        let questions = [...document.querySelectorAll('article')];
        var obj = {'name':'sap'};
        // questions.map(x => obj.push(
        //     { 
        //         'name': x.name
        //         // name: x.children[0].value, 
        //         // firstAnswer: x.children[1].value, 
        //         // secondAnswer: x.children[2].value, 
        //         // thirdAnswer: x.children[3].value, 
        //         // fourthAnswer: x.children[4].value,
        //         // correctAnswer:x.children[6].value
        //  }))
      
        var result =  await quizService.Create(obj)
        console.log(result);
    }
    render() {
        return (
            <section className='create-quiz-section' onSubmit={this.handleSubmit.bind(this)}>
                <form>
                    <input type='text' placeholder='Name' name='name' value={this.state.quiz.name} onChange={this.handleChange.bind(this)} />
                    <div id="dynamicInput">
                        {this.state.questions.map(q => <Question key={q} />)}
                    </div>
                    <button type='button' onClick={this.createQuestion.bind(this)}>Add Question</button>
                    <button type='submit'>Create</button>
                </form>
            </section>
        )
    }
}

export default Create