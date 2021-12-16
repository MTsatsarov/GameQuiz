import "./PlayAnswer.css"
import { useContext } from "react"
import { PlayContext } from "../../../contexts/PlayContext"
const PlayAnswer = (props) => {
    var context = useContext(PlayContext)
   const changeHandler=(e) =>{
    }
    return (
        <span className='answerSpan'>
            <input type={"radio"} id={`${props.data.id}`} onChange={changeHandler} name={props.question} value={`${props.data.id}`} onClick={(e) =>context.checkAnswer(e,props.question)} defaultChecked={props.setChecked} />
            <label htmlFor={`${props.data.id}`}>{`${props.data.title}`}</label>
        </span>
    )
}

export default PlayAnswer