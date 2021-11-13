import { Component } from "react/cjs/react.production.min";
import "./Answer.css"

class Answer extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
            <label className='answer-label' htmlFor="firstAnswer"> Answer: 1</label>
            <input className='answer-input' type='text' id = "firstAnswer" />
            <label className='answer-label' htmlFor="firstAnswer"> Answer: 2</label>
            <input className='answer-input' type='text' id = "secondAnswer" />
            <label className='answer-label' htmlFor="firstAnswer"> Answer: 3</label>
            <input className='answer-input' type='text' id = "thirdAnswer" />
            <label className='answer-label' htmlFor="firstAnswer"> Answer: 4</label>
            <input className='answer-input' type='text' id = "firstAnswer" />
            <label className='answer-label' htmlFor= 'correct'>Please write the number of the correct answer</label>
            <input className='correct-answer' max={4} min={1} type='number' name='correct' defaultValue={1} />
            </>
        )
    }
}

export default Answer