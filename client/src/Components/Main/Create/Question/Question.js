import { Component } from "react/cjs/react.production.min";
import Answer from "../Answer/Answer"
class Question extends Component
{
    constructor() {
        super()
    }


    render() {
        return(
            <article className='question'>
            <textarea type='textarea' />
            <Answer/>
            </article>
        )
    }
}

export default Question