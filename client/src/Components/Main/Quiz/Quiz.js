import Star from "../../../shared/Star/Star"
import * as voteService from "../../../services/VoteServices/VoteServices"
import { useState } from "react"
import "./Quiz.css"
import { Link } from "react-router-dom"
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Quiz = (props) => {
    const [vote, setVote] = useState({
        voteCount: props.votesCount,
        grade: props.grade
    })

    async function voteClickHandler(voteGrade) {
        var id = props.id;
        var obj = {
            quiz: `${id}`,
            grade: voteGrade
        }
        var result = await voteService.Vote(obj);
        setVote(oldVote => ({
            ...oldVote, voteCount: result.voteCount, grade: result.grade
        }));

    }

    return (
        <article className='quiz-wrapper'>
            <h3>{props.name}</h3>
            <p className='quiz-taken'>Taken: {props.taken === 1 ? `${props.taken} time` : `${props.taken} times`}</p>
            <p className='quiz-creator'>Created by: {props.creator}</p>
            <span>
                <Star value={1} clickHandler={voteClickHandler} />
                <Star value={2} clickHandler={voteClickHandler} />
                <Star value={3} clickHandler={voteClickHandler} />
                <Star value={4} clickHandler={voteClickHandler} />
                <Star value={5} clickHandler={voteClickHandler} />
            </span>
            <span className='votes-box'>
                <p>Average grade: {vote.grade}/5</p>
                <p>{vote.voteCount} votes</p>
            </span>
            <span className='quiz-modify'>
                <Link to={`/edit/${props.id}`} ><FontAwesomeIcon icon={faEdit}/>Edit</Link>
                <button><FontAwesomeIcon icon={faTrash}/>Delete</button>
            </span>
            <button>Play</button>
        </article>
    )
}

export default Quiz