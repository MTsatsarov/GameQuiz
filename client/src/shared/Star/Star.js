import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Star.css"
function  Star(props) {
    return (
        <span data-value={props.value} onClick={()=>props.clickHandler(props.value)}>
        <FontAwesomeIcon icon={faStar} value ={props.value} />
        </span>
    )
}

export default Star