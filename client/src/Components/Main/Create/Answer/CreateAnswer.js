import { Component } from "react/cjs/react.production.min";
import Error from "../../../../shared/Error/Error";
import "./CreateAnswer.css"

class CreateAnswer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            isValid: false
        }
    }

    changeHandler(e) {
        this.setState({ value: e.target.value })
    }
    validateAnswer(e) {
        var length = e.target.length;
        if (length < 10 || length > 150) {
            this.setState({ isValid: false });
        } else {
            this.setState({ isValid: true });
        }
    }
    render() {
        return (
            <div className='myAnswer'>
                <p>Mark as correct</p>
                <input type='checkbox' id='firstAnswer' name={this.state.value} value={this.state.value} />
                <label className='answer-label' htmlFor={this.state.value}> Answer: {this.props.number}</label>
                <input type='text' className='answer-input' type='text' id="firstAnswer" onChange={this.changeHandler.bind(this)} />
                {!this.state.isValid && <Error message={'Answer must be between 10 and 150 characters long'} />}
            </div>
        )
    }
}

export default CreateAnswer