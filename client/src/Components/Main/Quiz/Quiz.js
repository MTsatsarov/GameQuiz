import Star from "../../../shared/Star/Star"
import * as voteService from "../../../services/VoteServices/VoteServices"
import "./Quiz.css"

const Quiz = (props) => {

    async function voteClickHandler(voteGrade) {
        var id = props.id;
        var obj = {
            quiz :`${id}`,
            grade: voteGrade
        }
        await voteService.Vote(obj);

    }
    return (
        <article className='quiz-wrapper'>
            <h3>{props.name}</h3>
            <p className='quiz-taken'>Taken: {props.taken == 1 ? `${props.taken} time` : `${props.taken} times`}</p>
            <p className='quiz-creator'>Created by: {props.creator}</p>
            <span>
                <Star value={1} clickHandler={voteClickHandler} />
                <Star value={2} clickHandler={voteClickHandler} />
                <Star value={3} clickHandler={voteClickHandler} />
                <Star value={4} clickHandler={voteClickHandler} />
                <Star value={5} clickHandler={voteClickHandler} />
            </span>
            <span className='votes-box'>
                <p>Average grade: {props.grade.toString(2)}/5</p>
                <p>{props.votesCount} votes</p>
            </span>
            <button>Play</button>
        </article>
    )
}

export default Quiz