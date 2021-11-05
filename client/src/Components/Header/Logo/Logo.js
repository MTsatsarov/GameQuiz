import { Component } from "react";
import "./Logo.css"

class Logo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <span className='Logo-wrapper'>
                <img alt='Logo image' />
            </span>
        )
    }
}

export default Logo;