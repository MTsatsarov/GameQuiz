import { Component } from "react/cjs/react.production.min";
import { CreateContext } from "../../../../contexts/CreateContext";
import Error from "../../../../shared/Error/Error";
import "./CreateAnswer.css"

class CreateAnswer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isValid: false
        }
    }
    validateAnswer(e) {
        var length = e.target.value.length;
        if (length < 10 || length > 150) {
            this.setState({ isValid: false });
        } else {
            this.setState({ isValid: true });

        }
        console.log(this.state.isValid);
        this.context.changeAnswerNameHandler(e.target.value, this.props.questionIndex, this.props.number - 1)
    }
    render() {
        return (
            <div className='myAnswer'>
                <label className='answer-label' htmlFor={this.state.value}> Answer: {this.props.number}</label>
                <div className="answer-wrapper">
                    <p className="radio-message">Mark as correct</p>
                    <div className="radio-div">
                        <input type='radio' name={this.state.value} value={this.state.value} name={`question${this.props.questionIndex}`} onChange={() => this.context.changeCorrectAnswer(this.props.questionIndex, this.props.number - 1)} />
                        <input type='text' className='answer-input' onChange={this.validateAnswer.bind(this)} />

                    </div>
                </div>

                {!this.state.isValid && <Error message={'Answer must be between 10 and 150 characters long'} />}
            </div>
        )
    }
}

CreateAnswer.contextType = CreateContext
export default CreateAnswer