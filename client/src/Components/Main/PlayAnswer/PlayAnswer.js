import "./PlayAnswer.css"
const PlayAnswer = (props) => {
    return (
        <span className='answerSpan'>
            <input type={"radio"} id={`${props.data.id}`} name={props.question} value={`${props.data.id}`} />
            <label htmlFor={`${props.data.id}`}>{`${props.data.title}`}</label>
        </span>
    )
}

export default PlayAnswer