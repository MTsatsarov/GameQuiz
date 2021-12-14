import ScaleLoader from "../../../node_modules/react-spinners/ScaleLoader"
import { css } from "@emotion/react";
import "./Spinner.css"


const Spinner = (props) => {


    return (
        <div className="loader">
        <ScaleLoader loading={props.loading} color="yellow"  size={150}/>
        </div>
    )
}

export default Spinner