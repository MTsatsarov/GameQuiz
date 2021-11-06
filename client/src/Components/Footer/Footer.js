import { Component } from "react";
import "./Footer.css"

class Footer extends Component {

    render() {
        return (
            <footer className='site-footer'>
                <ul>
                    <li>
                    &copy;  GameQuiz 
                    </li>

                    <li>
                        <a href="github.com">GitHub</a>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer;