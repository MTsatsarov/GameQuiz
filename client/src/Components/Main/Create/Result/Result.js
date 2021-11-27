import "./Result.css"

const Result = (props) => {
    console.log(props
    );
    return (
        <section className='resultWrapper'>
            <h2>Quiz: {props.name}</h2>
            <p>Done by: {props.userName}</p>
            <article className='results article'>
                <p>Correct Answers</p>
                <p><span className='pointsSpan'>{props.points}</span> / {props.total}  Points</p>
                <p>Progress: {Number(props.percentage)} %</p>
            </article>
        </section>
    )
}

export default Result