import { Component } from "react/cjs/react.production.min"

class Create extends Component {
    constructor() {
        super()
        this.state = {
            quiz: {
                name: '',
                questions: []
            }
        }
    }
    createQuestion() {
        return null;
        //TODO
    // Create QUESTION
    }
    render() {
        return (
            <section className='create-quiz-section'>
                <input type='text' placeholder='Name' name='name' value='' />
                <button onClick={this.createQuestion}>Add Question</button>
            </section>
        )
    }
}

export default Create