import React from 'react';
import header from './header.css';
import logo from './images/airport_500px.png';


const Header = () => {
    return (
        <header>
            <img className={"logo"} src={logo} alt="logo" height={"70px"}/>
            <nav>
                <ul className="navLinks">
                    <li><a href="#">صفحه اصلی</a></li>
                    <li><a href="#">پیگیری بلیط</a></li>
                    <li><a href="#">درباره ما</a></li>
                    <li><a href="#">تماس باما</a></li>
                </ul>
            </nav>
            <div className="login">
                <a href="#" className={"cta"}>
                    <button> ورود</button>
                </a>
            </div>
        </header>
    );
};

export default Header;
