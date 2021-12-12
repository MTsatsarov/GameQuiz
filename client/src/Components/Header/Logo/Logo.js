import { Component } from "react";
import "./Logo.css"
import { Link } from "react-router-dom"
import logoNew from "../../../static/logoNew.png"

class Logo extends Component {
    render() {
        return (
            <span className='Logo-wrapper'>
                <Link to='/'>
                    <img src={logoNew} alt='Logo' />
                </Link>
            </span>

        )
    }
}

export default Logo;