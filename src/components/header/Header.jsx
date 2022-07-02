import React from 'react';
import header from './header.css';
import logo from './images/airport_500px.png';
import ticketImage from './images/boarding_pass_60px.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';

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
                    <button>بلیط ها </button>
                    <img src={ticketImage} alt="" style={{
                        color:"red",
                        background_color:"red"
                    }}/>
                    {/*<FontAwesomeIcon icon={solid('ticket-airline')}/>*/}
                </a>
            </div>
        </header>
    );
};

export default Header;
