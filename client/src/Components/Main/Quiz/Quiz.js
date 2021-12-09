import * as voteService from "../../../services/VoteServices/VoteServices"
import * as quizService from "../../../services/QuizServices/QuizServices"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Star from "../../../shared/Star/Star"
import { AuthContext } from "../../../contexts/AuthContext.js"
import "./Quiz.css"
const Quiz = (props) => {
    const context = useContext(AuthContext)
    const [vote, setVote] = useState({
        voteCount: props.votesCount,
        grade: props.grade,
        stars: [{
            id: 1,
            class: ''
        },
        {
            id: 2,
            class: ''
        },
        {
            id: 3,
            class: ''
        },
        {
            id: 4,
            class: ''
        },
        {
            id: 5,
            class: ''
        }]
    })
    async function deleteQuizHandler(e) {
        var value = e.target.getAttribute('data-id');
        await quizService.Delete(value)
        props.history.push('/all')

    }
    async function voteClickHandler(voteGrade) {
        var id = props.id;
        var obj = {
            quiz: `${id}`,
            grade: voteGrade,
            userId: localStorage.getItem('id')
        }
        var result = await voteService.Vote(obj);
        setVote(oldVote => ({
            ...oldVote, voteCount: result.voteCount, grade: result.grade,
        }));
    }

    return (
        <article className='quiz-wrapper'>
            <h3>{props.name}</h3>
            <p className='quiz-taken'>Taken: {props.taken === 1 ? `${props.taken} time` : `${props.taken} times`}</p>
            <p className='quiz-creator'>Created by: {props.creator}</p>
            <span >
                {vote.stars.map((x, i) => <Star value={x.id} key={x.id} class={vote.grade >= Number(x.id) ? "yellow" : ''} clickHandler={voteClickHandler} />,)}

            </span>
            <span className='votes-box'>
                <p>Average grade: {vote.grade}/5</p>
                <p>{vote.voteCount} votes</p>
            </span>
            {props.creator === localStorage.getItem('userName') ? <><span className='quiz-modify'>
                <Link to={`/edit/${props.id}`} >
                    <FontAwesomeIcon icon={faEdit} /> Edit
                </Link>
                <button data-id={props.id} onClick={deleteQuizHandler}>
                    <FontAwesomeIcon icon={faTrash} />Delete
                </button>
            </span>
            </> : ''}
            <Link to={context.user.id != '' ? `/play/${props.id}` : '#'} >Play</Link>
        </article>
    )
}

export default Quiz