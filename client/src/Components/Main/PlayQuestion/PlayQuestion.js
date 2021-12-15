import PlayAnswer from "../PlayAnswer/PlayAnswer";
import { useContext } from "react";
import "./PlayQuestion.css"
import { PlayContext } from "../../../contexts/PlayContext";

const PlayQuestion = (props) => {
var context = useContext(PlayContext)
    return (
        <article className='questionArticle'>
            <h4>{props.data.title}</h4>
            <span name={props.data.title}>
                {props.data.answers.map(x => <PlayAnswer data={x} question={props.data.title} key={x.id} setChecked={context.checkedAnswer[props.data.title] === x.id ? true : false} />)}
            </span>
        </article>
    )
}

export default PlayQuestion