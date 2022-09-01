import React, {useEffect, useState, useContext} from 'react'
import './paymentPage.css'
import * as api from "../../api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {TicketBasketContext} from "../../contexts/TicketBasketContext";
import shaparak from './images/Shaparak.png'
import captcha from './images/captcha.png'

export const PaymentPage = () => {
    return (
        <div className="payment-container">
            <img src={shaparak} alt="shaparak" style={{width: "10%"}}/>
            <div className={"pay-box"}>
                شماره کارت:
                <div className="pay-field">
                    <input type="text" maxLength={4} style={{width: "70px", textAlign: "center"}}/>
                </div>
                <div className="pay-field">
                    <input type="text" maxLength={4} style={{width: "70px", textAlign: "center"}}/>
                </div>
                <div className="pay-field">
                    <input type="text" maxLength={4} style={{width: "70px", textAlign: "center"}}/>
                </div>
                <div className="pay-field">
                    <input type="text" maxLength={4} style={{width: "70px", textAlign: "center"}}/>
                </div>
            </div>
            <div className="pay-box">
                cvv2:
                <div className="pay-field" style={{"marginLeft": "20px", width: "50px"}}>
                    <input type="number" placeholder={""} maxLength={4} style={{width: "50px", textAlign: "center"}}/>
                </div>
                تاریخ انقضاء:
                <div className="pay-field" style={{width: "50px"}}>
                    <input type="number" placeholder={""} maxLength={2} style={{width: "35px"}}/>
                </div>
                /
                <div className="pay-field" style={{width: "50px"}}>
                    <input type="number" placeholder={""} maxLength={2} style={{width: "35px"}}/>
                </div>
            </div>
            <div className="pay-box">
                کد امنیتی:
                <input type="tel" placeholder={""} maxLength={5} style={{width: "100px", marginRight: "10px"}}/>
                <img src={captcha} alt="captcha" width={"200px"}/>
            </div>
            <div className="pay-box">
                <div className="pay-field" style={{width: "150px"}}>
                    <input type="tel" placeholder={""} maxLength={10} style={{width: "150px", textAlign: "center"}}/>
                </div>
                <input type="submit" value={"رمز پویا"} style={{
                    width: "100px",
                    boxShadow: " 0 2px 5px rgba(0, 0, 0, 0.2)",
                    padding: "5px",
                    border: "none",
                    borderRadius: "10px",
                    color: "#fff",
                    backgroundColor: "green"
                }}/>
            </div>
            <div className="pay-box">
                <input type="checkbox" style={{marginLeft: "10px"}}/>
                اطلاعات کارت ذخیره شود؟
            </div>
        </div>
    )
}