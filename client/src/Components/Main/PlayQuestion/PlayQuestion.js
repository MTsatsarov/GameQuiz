import PlayAnswer from "../PlayAnswer/PlayAnswer";
import "./PlayQuestion.css"

const PlayQuestion = (props) => {
    return (
        <article className='questionArticle'>
            <h4>{props.data.title}</h4>
            <span name={props.data.title}>
                {props.data.answers.map(x => <PlayAnswer data={x} question ={props.data.title} key={x.id} />)}
            </span>
        </article>
    )
}

export default PlayQuestion