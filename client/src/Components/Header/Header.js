import { Component } from "react";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import "./Header.css"

class Header extends Component {

    render() {
        return (
            <header className='header-wrapper'>
                <Logo />
                <Navigation />
            </header>
        )
    }
}

export default Header;