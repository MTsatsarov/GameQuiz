import { Component } from "react";
import "./Logo.css"
import { Link } from "react-router-dom"
class Logo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <Link to='/'>
                <span className='Logo-wrapper'>
                    <img alt='Logo image' />
                </span>
            </Link>
        )
    }
}

export default Logo;