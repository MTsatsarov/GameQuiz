import { Component } from "react";
import "./Welcome.css"

class Welcome extends Component {
    constructor(props) {
        super(props)
        console.log("here");
    }
    render() {
        return (
            <section className='welcome-section'>
                <article className="welcome-image-wrapper">
                    <span>
                        <img alt='Welcome image' />
                    </span>
                </article>

                <article className="welcome-ul-wrapper">
                    <ul>
                        <li>You like to learn new things ?</li>
                        <li>You like to play games ?</li>
                        <li>You are in the right place !</li>
                    </ul>
                    <button>Get Started</button>
                </article>
            </section>
        );
    }
}

export default Welcome;