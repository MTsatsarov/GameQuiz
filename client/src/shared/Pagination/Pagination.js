import "./Pagination.css"
import { Link } from "react-router-dom";
const Pagination = (props) => {
    return (
        <div className="pagination" onClick={props.clickHandler}>
            <Link data-id={'1'} className="anchor" to={{ pathname: `/${props.location}/1` }}>
            First
            </Link>
                {props.prev ? <>
                <Link data-id={props.currPage - 1} className="anchor" to={{ pathname: `/${props.location}/${props.currPage - 1}` }}> {props.currPage - 1}

                </Link> </>
                : ''}

            <Link data-id={props.currPage} className="current" to={{ pathname: `/${props.location}/${props.currPage}` }}>
               {props.currPage}
            </Link>

            {props.nextPage ? <>
                <Link data-id={props.currPage + 1} to={{ pathname: `/${props.location}/${props.currPage + 1}` }} className="anchor" >
                        {props.currPage + 1}
                </Link>
                </> : ''}


          
            <Link data-id={props.total} className="anchor" to={{ pathname: `/${props.location}/${props.total}` }} >
             Last
            </Link>
        </div>

    )
}

export default Pagination