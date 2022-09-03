import React, {useEffect, useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom';
import {AccountContext} from "../../contexts/AccountContext";
import './pageProfile.css'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import * as api from "../../api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {Buy} from '../../components/buy/Buy'
import {TicketBasketContext} from "../../contexts/TicketBasketContext";
import {Trip} from '../../components/trip/Trip'

export const ProfilePage = () => {
    const navigate = useNavigate();

    const {myAccount, setMyAccount} = useContext(AccountContext);
    const {ticketBasket, setTicketBasket} = useContext(TicketBasketContext);
    const {customerBasket, setCustomerBasket} = useState({});

    let finalPrice = 0;
    console.log(ticketBasket)
    for (let i = 0; i < ticketBasket.length; i++) {
        finalPrice += ticketBasket[i].trip.tripPrice * ticketBasket[i].amount;
    }

    const submitEditHandler = (e) => {
        e.preventDefault();
        api.updateAccount(myAccount, {
            onError: (err) => {
                console.log(err.message);
            }, onSuccess: (account, status) => {
                console.log(status)
                if (status === 200) {
                    window.localStorage.removeItem('accountPhoneNumber');
                    window.localStorage.setItem('accountPhoneNumber', account.accountPhoneNumber);
                    window.location.reload()
                }
            }
        })
    }
    const buyHandler = (e) => {
        e.preventDefault();
        console.log("buyHandler")
        navigate('/pay')
        // api.ticketBuy(customerBasket,{})
    }
    useEffect(() => {
        api.readAccount({
            onError: (error) => {
                console.log(error);
            }, onSuccess: (accountInfo) => {
                const {
                    accountPhoneNumber = '',
                    accountEmail = '',
                    accountPlainPassword = '',
                } = accountInfo;
                setMyAccount(accountInfo);
            }
        })

    }, []);
    return (
        <div className="profile-container">
            <Header/>
            <h2 className="edit-title">ویرایش اطلاعات کاربری</h2>
            <div className="info-box-container">
                <div className="info-box">
                    <form onSubmit={submitEditHandler} className="edit-form">
                        <div className="edit-form-container">
                            <div className="edit-field">
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
                            <div className="edit-field">
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
                            <div className="edit-field">
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
            <div className="customers">
                {
                    ticketBasket.length > 0 && <h3>لطفا اطلاعات هر مسافر را برای هر سفر با دقت وارد کنيد</h3>

                }
                {
                    ticketBasket.map((basketObj, index) => <>
                            <p style={{marginTop: "20px"}}> بلیط
                                سفر <b>{basketObj.trip?.tripSrc ?? ""}</b> به <b>{basketObj.trip?.tripDst ?? ""}</b></p>
                            <Trip basketObj={basketObj}/>
                        </>
                    )
                }
                {
                    ticketBasket.length > 0
                    && <div className={"buy-button"}>
                        <p>هزينه کل:
                            {finalPrice}
                            &nbsp;
                            تومان
                        </p>
                        <button className="buy" onClick={buyHandler}>
                            <p>ثبت اطلاعات</p>
                        </button>
                    </div>
                }
            </div>
            <Footer/>
        </div>
    )
}