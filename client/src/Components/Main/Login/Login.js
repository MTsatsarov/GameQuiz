import { Component } from "react/cjs/react.production.min"
import "./Login.css"
class Login extends Component {
    constructor() {
        super()
        this.state = {
            errors: ''
        }
    }
    
    LoginSubmitHandler = (e) => {
        this.setState({ errors: '' })
        e.preventDefault();
        var userName = e.target.userName.value;
        var password = e.target.password.value;
        if (userName == '' || password == '') {
            this.setState({ error: 'All fields must be filled' })
        }
    }

    render() {
        return (
            <div className='login-wrapper' >
                <h3>Login</h3>
                <form onSubmit={this.LoginSubmitHandler} >
                    <span className='validation-errors'>{this.state.error}</span>
                    <input type='text' name='userName' placeholder='Enter your username ...' />
                    <input type='password' name="password" placeholder='Enter your password ...' />
                    <button>Login</button>
                </form>
            </div >
        )
    }
}

export default Login