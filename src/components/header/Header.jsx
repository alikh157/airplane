import React from 'react';
import header from './header.css';
import logo from './images/airport_500px.png';
import Button from '@mui/material/Button';
import ticketImage from './images/boarding_pass_60px.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    login: {
        marginTop: '5px',
        marginLeft: '5px',
        '&.MuiButton-textSecondary': {
            borderRadius: '10px',
            color: '#6c6464',
            fontFamily: 'IRANSansX'
        },
    },
});
const Header = () => {
    const classes = useStyles();
    return (
        <header>
            <img className={"logo"} src={logo} alt="logo" height={"70px"}/>
            <nav>
                <ul className="navLinks">
                    <li><a href="/">صفحه اصلی</a></li>
                    <li><a href="#">پیگیری بلیط</a></li>
                    <li><a href="#">درباره ما</a></li>
                    <li><a href="#">تماس باما</a></li>
                </ul>
            </nav>
            <div className="login">
                {
                    window.localStorage.getItem("accountPhoneNumber")?
                        <Button
                            variant="text"
                            color="secondary"
                            href="#"
                            size={"large"}
                            className={classes.login}
                        > accountPhoneNumber <FontAwesomeIcon className={'icon'} style={{"transform": 'rotate(180deg)'}}
                                                       icon={solid('arrow-right-to-bracket')}/></Button>
                        :
                    <Button
                    variant="text"
                    color="secondary"
                    href="/login"
                    size={"large"}
                    className={classes.login}
                > ورود/ثبتنام <FontAwesomeIcon className={'icon'} style={{"transform": 'rotate(180deg)'}}
                                               icon={solid('arrow-right-to-bracket')}/></Button>

                }
            </div>
        </header>
    );
};
{/*<img src={ticketImage} alt="" style={{*/
}
{/*    color:"red",*/
}
{/*    background_color:"red"*/
}
{/*}}/>*/
}
{/*<FontAwesomeIcon icon={solid('ticket-airline')}/>*/
}

export default Header;
