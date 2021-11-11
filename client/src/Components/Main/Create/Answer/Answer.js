import { Component } from "react/cjs/react.production.min";

class Answer extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
            <input type='text' id = "firstAnswer" />
            <input type='text' id = "secondAnswer" />
            <input type='text' id = "thirdAnswer" />
            <input type='text' id = "firstAnswer" />
            <label for= 'correct'>Please write the number of the correct answer</label>
            <input type='number' name= 'correct' />
            </>
        )
    }
}

export default Answer