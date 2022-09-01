import React, {useContext} from 'react';
import header from './header.css';
import logo from './images/airport_500px.png';
import Button from '@mui/material/Button';
import ticketImage from './images/boarding_pass_60px.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';
import {makeStyles} from "@mui/styles";
import Badge from '@mui/material/Badge';
import {TicketBasketContext} from "../../contexts/TicketBasketContext";
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles({
    login: {
        '&.MuiButton-textSecondary': {
            borderRadius: '10px',
            color: '#6c6464',
            fontFamily: 'IRANSansX'
        },
    },
});
const Header = () => {
    const {ticketBasket, setTicketBasket} = useContext(TicketBasketContext);
    const {0: ticket} = {...ticketBasket}
    const navigate = useNavigate();

    const classes = useStyles();
    return (
        <header>
            <img className={"logo"} src={logo} alt="logo" height={"70px"}/>
            <nav>
                <ul className="navLinks">
                    <li><a href="/">صفحه اصلی</a></li>
                    <li>
                        <a href="/profile">پیگیری بلیط</a>
                    </li>
                    <li><a href="/about">درباره ما</a></li>
                    <li><a href="/callus">تماس باما</a></li>
                </ul>
            </nav>
            <div className="login">

                {
                    window.localStorage.getItem("accountPhoneNumber") ?
                        [
                            <Badge badgeContent={ticket ? ticket.amount : 0} color="error">
                                <Button
                                    variant="text"
                                    color="secondary"
                                    size={"large"}
                                    // href={"/profile"}
                                    className={classes.login}
                                    onClick={() => navigate('/profile')}
                                > {window.localStorage.getItem("accountPhoneNumber")} <FontAwesomeIcon
                                    className={'iconUser'}
                                    icon={solid('user')}/></Button>
                            </Badge>
                            ,
                            <Button
                                variant="text"
                                color="secondary"
                                href="/"
                                size={"large"}
                                style={{"color": "rgba(255,115,20,0.78)"}}
                                onClick={() => window.localStorage.clear()}
                                className={classes.login}
                            >
                                خروج
                                <FontAwesomeIcon className={'iconExit'}
                                                 icon={solid('arrow-right-from-bracket')}/>
                            </Button>
                        ]
                        :
                        <Button
                            variant="text"
                            color="secondary"
                            href="/login"
                            size={"large"}
                            className={classes.login}
                        > ورود/ثبت نام <FontAwesomeIcon className={'iconLogin'} style={{"transform": 'rotate(180deg)'}}
                                                        icon={solid('arrow-right-to-bracket')}/></Button>
                }
            </div>
        </header>
    );
};

export default Header;
