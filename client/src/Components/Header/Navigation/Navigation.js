import { Component } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext";
import "./Navigation.css"
class Navigation extends Component {
    clickHandler = () => {
        this.context.logout();
        localStorage.clear();
        console.log(this.context.user);
    }

    render() {
        return (
            <nav className="Header-nav">
                <ul>
                    <li><Link to="/all">All Quizzes</Link></li>
                    <li><Link to="/create" >Create Quiz</Link></li>
                    <li><Link to='/my-quizzes'>My Quizzes</Link></li>
                    {this.context.user.email ? <> <li><Link to='/my-profile' >Hello "{this.context.user.email}"</Link></li>
                        <li><Link onClick={this.clickHandler.bind(this)} to='/all' >Logout</Link></li> </>
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