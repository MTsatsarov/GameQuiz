import { Component } from "react";
import "./Logo.css"
import { Link } from "react-router-dom"
import logo192 from "../../../static/logo192.png"

class Logo extends Component {
    render() {
        return (

            <Link to='/'>
                <span className='Logo-wrapper'>
                    <img src={logo192} alt='Logo' />
                </span>
            </Link>
        )
    }
}

export default Logo;