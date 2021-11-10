
const Quiz = (props) => {

    return (
        <article className='quiz-wrapper'>
            <h3>{props.name}</h3>
            <p>Taken: {props.taken == 1 ? `${props.taken} time` : `${props.taken} times`}</p>
            <span className='votes-box'>
                <p>Average grade: `${props.grade.toString(2)}`/5</p>
                <p>${props.votesCount} votes</p>
            </span>
            <button>Play</button>
        </article>
    )
}

export default  Quiz