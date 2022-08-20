import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import './login.css';
// import '../../temp.js';
import {regular, solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import signupImage from './images/undraw_aircraft_re_m05i.svg';
import signinImage from './images/undraw_login_re_4vu2.svg';
import * as api from "../../api";


function change() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener('click', () => {
        container.classList.add("sign-up-mode");
    });
    sign_in_btn.addEventListener('click', () => {
        container.classList.remove("sign-up-mode");
    });
}

export const Login = () => {
    const [account, setAccount] = useState([]);
    const navigate= useNavigate();
    const submitLoginHandler = (e) => {
        e.preventDefault();
        delete account.accountEmail;
        api.loginAccount(account, {
            onError: (err) => {
                console.log(err.message);
            }, onSuccess: (msg) => {
                localStorage.setItem('auth-token', msg);
                localStorage.setItem('accountPhoneNumber', account.accountPhoneNumber);
                navigate('/');
                console.log(msg);
            }
        })
        // console.log(e)
    }
    const submitRegisterHandler = (e) => {
        e.preventDefault();
        api.registerAccount(account, {
            onError: (err) => {
                console.log(err.message);
            }, onSuccess: (msg) => {
                console.log(msg);
                navigate('/login');
            }
        })
        // console.log(e)
    }
    return (
        <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form onSubmit={submitLoginHandler} className="sign-in-form" method={"Post"}>
                        <h2 className="title">
                            ورود
                        </h2>
                        <div className="input-field">
                            <FontAwesomeIcon icon={solid('mobile')} style={{
                                textAlign: "center",
                                lineHeight: "55px",
                                color: "#acacac",
                                fontSize: "1.1rem"
                            }}/>
                            <input type="text" placeholder={"شماره همراه خود را وارد کنيد"}
                                   onChange={e => setAccount({...account, accountPhoneNumber: e.target.value})}
                                   value={account.accountPhoneNumber}/>
                        </div>
                        <div className="input-field">
                            <FontAwesomeIcon icon={solid('lock')} style={{
                                textAlign: "center",
                                lineHeight: "55px",
                                color: "#acacac",
                                fontSize: "1.1rem"
                            }}/>
                            <input type="password" placeholder={"رمزعبور"}
                                   onChange={e => setAccount({...account, accountPlainPassword: e.target.value})}
                                   value={account.accountPlainPassword}/>
                        </div>
                        <input type="submit" className="loginBtn" value={"ورود"}/>
                    </form>
                    <form onSubmit={submitRegisterHandler} className="sign-up-form">
                        <h2 className="title">
                            ثبت نام
                        </h2>
                        <div className="input-field">
                            <FontAwesomeIcon icon={solid('user')} style={{
                                textAlign: "center",
                                lineHeight: "55px",
                                color: "#acacac",
                                fontSize: "1.1rem"
                            }}/>
                            <input type="text" placeholder={"شماره همراه خود را وارد کنيد"}
                                   onChange={e => setAccount({...account, accountPhoneNumber: e.target.value})}
                                   value={account.accountPhoneNumber}/>
                        </div>
                        <div className="input-field">
                            <FontAwesomeIcon icon={solid('envelope')} style={{
                                textAlign: "center",
                                lineHeight: "55px",
                                color: "#acacac",
                                fontSize: "1.1rem"
                            }}/>
                            <input type="text" placeholder={"Email"}
                                   onChange={e => setAccount({...account, accountEmail: e.target.value})}
                                   value={account.accountEmail}/>
                        </div>
                        <div className="input-field">
                            <FontAwesomeIcon icon={solid('lock')} style={{
                                textAlign: "center",
                                lineHeight: "55px",
                                color: "#acacac",
                                fontSize: "1.1rem"
                            }}/>
                            <input type="password" placeholder={"رمزعبور"}
                                   onChange={e => setAccount({...account, accountPlainPassword: e.target.value})}
                                   value={account.accountPlainPassword}/>
                        </div>
                        <input type="submit" className="loginBtn" value={"ثبت نام"}/>
                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>قبلا عضو شده ايد؟</h3>
                        <p>با مراجعه به اين قسمت ميتوانيد وارد سايت شده و پنل کاربري و بليط خود را مشاهده کنيد.</p>
                        <button className="btn transparent" id={"sign-in-btn"} onClick={change}>ورود</button>
                    </div>
                    <img src={signupImage} className="image" alt="signupImage"/>
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>ثبت نام نکرده ايد؟</h3>
                        <p>
                            با مراجعه به اين قسمت ميتوانيد عضوي از ما شده و به راحتي بليط سفر خود را خريداري کنيد.
                        </p>
                        <button className="btn transparent" id={"sign-up-btn"} onClick={change}>
                            ثبت نام
                        </button>
                    </div>
                    <img src={signinImage} className="image" alt="signinImage"/>
                </div>
            </div>
        </div>
    )
}
