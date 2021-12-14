import "./Register.css"
import { Component } from "react";
import * as userService from "../../../services/UserServices/UserServices"

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        }
    }
    onSubmitHandler = async (e) => {
        e.preventDefault();
        this.setState({ error: '' })
        if (e.target.userName.value === '' || e.target.email.value === '' || e.target.password.value === '' || e.target.rePass.value === '') {
            this.setState({ error: 'All fields must be filled' })
        } else {
            let model = {
                username: e.target.querySelector('input').value,
                email: e.target.querySelectorAll('input')[1].value,
                password: e.target.querySelectorAll('input')[2].value,
            }
            var result = await userService.Register(model)
            console.log(result);
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

export default Register