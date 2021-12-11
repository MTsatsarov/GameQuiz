import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Component } from "react/cjs/react.production.min"
import * as userService from "../../../services/UserServices/UserServices"
import { faUser,faLock } from "@fortawesome/free-solid-svg-icons"
import "./Login.css"
import {AuthContext} from "../../../contexts/AuthContext.js"
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: ''
        }
       
    }
    LoginSubmitHandler = async (e) => {
        this.setState({ errors: '' })
        e.preventDefault();
        var userName = e.target.userName.value;
        var password = e.target.password.value;
        if (userName === '' || password === '') {
            this.setState({ error: 'All fields must be filled' })
        }
        else {
      
            var result = await userService.Login({userName,password})
            if (!localStorage.authToken) {
                this.context.login(result.id,result.userName,result.token,result.expiration)             
                this.props.history.push('/all')
            }
        }
    }

    render() {
        return (              
        <div className='login-wrapper' >
            <h3>Login</h3>
            <form onSubmit={this.LoginSubmitHandler} >
                <span className='validation-errors'>{this.state.error}</span>
                <FontAwesomeIcon className='loginIcons' icon={faUser}/>
                <input type='text' name='userName' placeholder='Enter your username ...' ></input>
                <FontAwesomeIcon className='loginIcons' icon={faLock}/>
                <input type='password' name="password" placeholder='Enter your password ...' />
                <button>Login</button>
            </form>
        </div >
        )
    }
}
Login.contextType = AuthContext;
export default Login