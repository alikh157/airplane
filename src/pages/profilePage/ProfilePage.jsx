import React, {useEffect, useState, useContext} from 'react'
import {SearchResultContext} from "../../contexts/SearchResultContext";
import './pageProfile.css'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import * as api from "../../api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

export const ProfilePage = () => {
    const [myAccount, setMyAccount] = useState([]);
    const submitEditHandler = (e) => {
        e.preventDefault();
        api.updateAccount(myAccount, {
            onError: (err) => {
                console.log(err.message);
            }, onSuccess: (msg) => {
                console.log(msg);
            }
        })
    }
    return (
        <div className="profile-container">
            <Header/>
            <h2 className="edit-title">ویرایش اطلاعات کاربری</h2>
            <div className="info-box-container">
                <div className="info-box">
                    <form onSubmit={submitEditHandler} className="edit-form">
                        <div className="edit-form-container">

                            <div className="input-field">
                                <FontAwesomeIcon icon={solid('mobile')} style={{
                                    textAlign: "center",
                                    lineHeight: "55px",
                                    color: "#acacac",
                                    fontSize: "1.1rem"
                                }}/>
                                <input type="text" placeholder={"شماره همراه خود را وارد کنيد"}
                                       onChange={e => setMyAccount({...myAccount, accountPhoneNumber: e.target.value})}
                                       value={myAccount.accountPhoneNumber}/>
                            </div>
                            <div className="input-field">
                                <FontAwesomeIcon icon={solid('envelope')} style={{
                                    textAlign: "center",
                                    lineHeight: "55px",
                                    color: "#acacac",
                                    fontSize: "1.1rem"
                                }}/>
                                <input type="text" placeholder={"Email"}
                                       onChange={e => setMyAccount({...myAccount, accountEmail: e.target.value})}
                                       value={myAccount.accountEmail}/>
                            </div>
                            <div className="input-field">
                                <FontAwesomeIcon icon={solid('lock')} style={{
                                    textAlign: "center",
                                    lineHeight: "55px",
                                    color: "#acacac",
                                    fontSize: "1.1rem"
                                }}/>
                                <input type="password" placeholder={"رمزعبور"}
                                       onChange={e => setMyAccount({
                                           ...myAccount,
                                           accountPlainPassword: e.target.value
                                       })}
                                       value={myAccount.accountPlainPassword}/>
                            </div>
                        </div>
                        <input type="submit" className="editBtn" value={"ذخیره"}/>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}