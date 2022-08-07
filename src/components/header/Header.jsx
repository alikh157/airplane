import React from 'react';
import header from './header.css';
import logo from './images/airport_500px.png';
import Button from '@mui/material/Button';
import ticketImage from './images/boarding_pass_60px.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';
import {makeStyles} from "@mui/material";
// import classes from "*.module.css";
const useStyles = makeStyles({
    login: {
        marginTop: '5px',
        marginLeft: '5px',
        '&.MuiButton-outlinedSecondary': {
            border: '1px solid pink',
        },
    },
});
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
                    <Button
                        variant="outlined"
                        color="secondary"
                        size={"medium"}
                        className={useStyles.login}
                    > ورود/ثبتنام</Button>
                    {/*<img src={ticketImage} alt="" style={{*/}
                    {/*    color:"red",*/}
                    {/*    background_color:"red"*/}
                    {/*}}/>*/}
                    {/*<FontAwesomeIcon icon={solid('ticket-airline')}/>*/}
            </div>
        </header>
    );
};

export default Header;
