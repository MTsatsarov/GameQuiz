import { Component } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext";
import "./Navigation.css"



class Navigation extends Component {
    clickHandler = () => {
        this.context.logout();
        localStorage.clear();
    }

    render() {
        return (
            <nav className="Header-nav">
                <ul>
                    <li><Link to="/all">All Quizzes</Link></li>
                    {this.context.user.id ?
                        <>
                            <li><Link to='/my-quizzes/1'>My Quizzes</Link></li>
                            <li><Link to="/create" >Create Quiz</Link></li>
                            <li><Link to='/my-profile' >Hello "{this.context.user.userName}"</Link></li>
                            <li><Link onClick={this.clickHandler.bind(this)} to='/all' >Logout</Link></li>
                        </>
                        :
                        <>

                            <li><Link to='/login' >Login</Link></li>
                            <li><Link to='/register'>Register</Link></li>
                        </>
                    }


                </ul>
            </nav>
        )
    }
}
Navigation.contextType = AuthContext
export default Navigation