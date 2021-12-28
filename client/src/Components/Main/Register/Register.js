import "./Register.css"
import { Component } from "react";
import * as userService from "../../../services/UserServices/UserServices"
import { AuthContext } from "../../../contexts/AuthContext";
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        }
    }
    onSubmitHandler = async (e) => {
        e.preventDefault();
        var { userName, email, password, rePass } = Object.fromEntries(new FormData(e.target));
        this.setState({ error: '' })
        if (userName === '' || email === '' || password === '' || rePass === '') {
            this.setState({ error: 'All fields must be filled' })
        } else if(password.length<8) {
            this.setState({ error: 'Password must be at least 8 characters long' })
        } else if (password!==rePass) {
            this.setState({ error: 'Passwords don\'t match' })
        } else {
            let model = {
                username: userName,
                email: email,
                password: password,
            }
            var result = await userService.Register(model)
            if(result.error) {
                this.setState({ error: result.error })
                return;
            }
            if (!localStorage.authToken) {
                this.context.login(result.id, result.userName, result.token, result.expiration)
            }
            this.props.history.push('/all')

        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler} className='register-form'>
                    <span className='validation-errors'>{this.state.error}</span>
                    <label htmlFor='userName' >Username</label>
                    <input type='text' name='userName' />
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' />
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' />
                    <label htmlFor='rePass'>Repeat Password</label>
                    <input type='password' name='rePass' />
                    <button type='submit'>Register</button>
                </form>
            </div>

        )
    }
}
Register.contextType = AuthContext;
export default Register