import React from 'react';
import './login.css';
// import '../../temp.js';
import {regular, solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import signupImage from './images/undraw_aircraft_re.svg';
import signinImage from './images/undraw_login_re_4vu2.svg';

function change() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener('click', () => {
        container.classList.add("sign-up-mode");
    });
    sign_in_btn.addEventListener('click', () => {
        container.classList.remove("sign_up_mode");
    });
}
export const Login = () => {
    return (
        <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">
                            Sign in
                        </h2>
                        <div className="input-field">
                            <FontAwesomeIcon icon={solid('user')} style={{
                                textAlign: "center",
                                lineHeight: "55px",
                                color: "#acacac",
                                fontSize: "1.1rem"
                            }}/>
                            <input type="text" placeholder={"Username"}/>
                        </div>
                        <div className="input-field">
                            <FontAwesomeIcon icon={solid('lock')} style={{
                                textAlign: "center",
                                lineHeight: "55px",
                                color: "#acacac",
                                fontSize: "1.1rem"
                            }}/>
                            <input type="password" placeholder={"Password"}/>
                        </div>
                        <input type="submit" className="loginBtn" value={"Login"}/>
                    </form>
                    <form action="#" className="sign-up-form">
                        <h2 className="title">
                            Sign up
                        </h2>
                        <div className="input-field">
                            <FontAwesomeIcon icon={solid('user')} style={{
                                textAlign: "center",
                                lineHeight: "55px",
                                color: "#acacac",
                                fontSize: "1.1rem"
                            }}/>
                            <input type="text" placeholder={"Username"}/>
                        </div>
                        <div className="input-field">
                            <FontAwesomeIcon icon={solid('envelope')} style={{
                                textAlign: "center",
                                lineHeight: "55px",
                                color: "#acacac",
                                fontSize: "1.1rem"
                            }}/>
                            <input type="text" placeholder={"Email"}/>
                        </div>
                        <div className="input-field">
                            <FontAwesomeIcon icon={solid('lock')} style={{
                                textAlign: "center",
                                lineHeight: "55px",
                                color: "#acacac",
                                fontSize: "1.1rem"
                            }}/>
                            <input type="password" placeholder={"Password"}/>
                        </div>
                        <input type="submit" className="loginBtn" value={"Signup"}/>
                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>One of us?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloremque incidunt
                            quas?</p>
                        <button className="btn transparent" id={"sign-in-btn"} onClick={()=>change()}>Sign in</button>
                    </div>
                    <img src={signupImage} className="image" alt="signupImage"/>
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>New here?</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloremque incidunt
                            quas?
                        </p>
                        <button className="btn transparent" id={"sign-up-btn"} onClick={()=>change()}>
                            Sign up
                        </button>
                    </div>
                    <img src={signinImage} className="image" alt="signinImage"/>
                </div>
            </div>
        </div>
    )
}
