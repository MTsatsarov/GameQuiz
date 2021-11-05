import { Component } from "react";
import "./Navigation.css"

class Navigation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="Header-nav">
                <ul>
                    <li><a href="javascript:void(0)">All Quizzes</a></li>
                    <li><a href="javascript:void(0)">Create Quiz</a></li>
                    <li><a href="javascript:void(0)">My Quizzes</a></li>
                    <li><a href="javascript:void(0)">Login</a></li>
                    <li><a href="javascript:void(0)">Register</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation