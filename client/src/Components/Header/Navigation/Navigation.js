import { Component } from "react";
import { Link } from "react-router-dom"
import "./Navigation.css"

class Navigation extends Component {
    clickHandler = () => {
        localStorage.clear();
    }
    render() {
        return (
            <nav className="Header-nav">
                <ul>
                    <li><Link to="/all">All Quizzes</Link></li>
                    <li><Link to="/create" >Create Quiz</Link></li>
                    <li><Link to='/my-quizzes'>My Quizzes</Link></li>
                    <li><Link to='/login' >Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link onClick={this.clickHandler.bind(this)} to='/all' >Logout</Link></li>

                </ul>
            </nav>
        )
    }
}

export default Navigation