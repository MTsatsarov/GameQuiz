import "./Result.css"

const Result = (props) => {
    return (
        <section className='resultWrapper'>
            <h2>Quiz: {props.name}</h2>
            <p>Done by: {props.userName}</p>
            <article className='results article'>
                <p>Correct Answers</p>
                <p><span className='pointsSpan'>{props.points}</span> / {props.maxScore}  Points</p>
                <p>Progress: {Number(props.percentage)} %</p>
            </article>
        </section>
    )
}

export default Result