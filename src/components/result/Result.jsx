import React from "react";
import './result.css'
import expandImg from './images/collapse_arrow_48px.png'
//we select 'data' from props that have key and data
export const Result = ({data}) => {
    const {
        ticketName='',
        ticketDst='',
        ticketSrc='',
        ticketPrice='',
        ticketInternalOrExternal='',
        ticketBusinessOrEconomy='',
        ticketNumber='',
        ticketAirplaneId: {
            airplaneAirlineName='',
            airplaneModel='',
            airplaneDst='',
            airplaneSrc='',
            airplaneImageSrc,
            airplaneCapacity='',
            airplaneFlightNumber='',
            airplaneTicketTakeOffTime='',
            airplaneTicketLandingTime=''
        }={},
    } = data;
    return (
        <div className="result">
            <div className="khar">
                <button className="buy">
                    <a href="#">
                        انتخاب بلیط
                    </a>
                </button>
                <p className="cost">{ticketPrice}تومان</p>
            </div>
            <div className="flight">
                <p className="type">اکونومی</p>
                <p className="num">22</p>
            </div>
            <div className="dst">
                <p className="city">مشهد</p>
                <p className="time">14:30</p>
            </div>
            <div className="src">
                <p className="city">تهران</p>
                <p className="time">12:30</p>
            </div>
            <div className="factory">
                <img src="https://cdn.3click.com/3c-static/images/airlines/IV.png" width="auto" height="50px"
                     alt="کاسپین"/>
                <p>کاسپین</p>
            </div>
            <img src={expandImg} height={"40px"} width={"40px"} alt="expand"/>
        </div>
    )
}