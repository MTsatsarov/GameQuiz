import "./Pagination.css"
import { Link } from "react-router-dom";
const Pagination = (props) => {
    return (
        <div className="pagination">
            <Link className="anchor" to={{ pathname: '/all/1' }}>First</Link>
            {props.prev ? <><Link className="anchor sign" to={{pathname:`${props.currPage - 1}`}} >&laquo;</Link>
                <Link className="anchor">{props.currPage - 1}</Link> </> : ''}

            <Link className="anchor" >{props.currPage}</Link>

            {props.nextPage ? <>  <Link to={{ pathname: `/all/${props.currPage + 1}}` }} className="anchor" >{props.currPage + 1}</Link>  <Link className="anchor sign" to={{ pathname: `/all/${props.currPage + 1}}` }}>&raquo;</Link>
                <Link className="anchor" to={{ pathname: `/all/${props.total}` }} >Last</Link>
            </> : ''}
        </div>

    )
}

export default Pagination