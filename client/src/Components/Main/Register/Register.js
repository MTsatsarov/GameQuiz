import { Component } from "react";
import "./Register.css"

class Register extends Component {
    constructor() {
        super();
        this.state = {
            error: ''
        }
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.setState({error: ''})
        if (e.target.userName.value == '' || e.target.email.value == '' || e.target.password.value == '' || e.target.rePass.value == '') {
          this.setState({error:'All fields must be filled'})
        }

    }

    render() {
        return (
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

        )
    }
}

export default Register