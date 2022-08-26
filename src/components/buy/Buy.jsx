import React from "react";
import './buy.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {regular, solid} from "@fortawesome/fontawesome-svg-core/import.macro";

export const Buy = () => {
    return (
        <div className="buy-container">
            <div className="edit-box">
                <div className="box1">
                    <div className="information">
                        <FontAwesomeIcon icon={solid('calendar-alt')} style={{
                            textAlign: "center",
                            lineHeight: "55px",
                            color: "#999898",
                            fontSize: "1.3rem"
                        }}/>
                        <input type="text" placeholder={"سن"}
                            // onChange={e => setMyAccount({
                            //     ...myAccount,
                            //     accountPlainPassword: e.target.value
                            // })}
                        />
                    </div>
                    <div className="information">
                        <FontAwesomeIcon icon={solid('book')} style={{
                            textAlign: "center",
                            lineHeight: "55px",
                            color: "#999898",
                            fontSize: "1.3rem"
                        }}/>
                        <input type="text" placeholder={"شماره شناسنامه"}
                            // onChange={e => setMyAccount({
                            //     ...myAccount,
                            //     accountPlainPassword: e.target.value
                            // })}
                        />
                    </div>
                    <div className="information">
                        <FontAwesomeIcon icon={solid("pager")} style={{
                            textAlign: "center",
                            lineHeight: "55px",
                            color: "#999898",
                            fontSize: "1.3rem"
                        }}/>
                        <input type="text" placeholder={"کدملی"}
                            // onChange={e => setMyAccount({
                            //     ...myAccount,
                            //     accountPlainPassword: e.target.value
                            // })}
                        />
                    </div>
                    <div className="information">
                        <FontAwesomeIcon icon={solid('user')} style={{
                            textAlign: "center",
                            lineHeight: "55px",
                            color: "#999898",
                            fontSize: "1.3rem"
                        }}/>
                        <input type="text" placeholder={"نام خانوادگی به انگلیسی"}
                            // onChange={e => setMyAccount({
                            //     ...myAccount,
                            //     accountPlainPassword: e.target.value
                            // })}
                        />
                    </div>
                </div>
                <div className="box2">
                    <div className="information">
                        <FontAwesomeIcon icon={solid('user')} style={{
                            textAlign: "center",
                            lineHeight: "55px",
                            color: "#999898",
                            fontSize: "1.3rem"
                        }}/>
                        <input type="text" placeholder={"نام به انگلیسی"}
                            // onChange={e => setMyAccount({
                            //     ...myAccount,
                            //     accountPlainPassword: e.target.value
                            // })}
                        />
                    </div>
                    <div className="information">
                        <FontAwesomeIcon icon={solid('envelope')} style={{
                            textAlign: "center",
                            lineHeight: "55px",
                            color: "#999898",
                            fontSize: "1.3rem"
                        }}/>
                        <input type="email" placeholder={"email"}
                            // onChange={e => setMyAccount({
                            //     ...myAccount,
                            //     accountPlainPassword: e.target.value
                            // })}
                        />
                    </div>
                    <div className="information">
                        <FontAwesomeIcon icon={solid('user')} style={{
                            textAlign: "center",
                            lineHeight: "55px",
                            color: "#999898",
                            fontSize: "1.3rem"
                        }}/>
                        <input type="text" placeholder={"نام به فارسی"}
                            // onChange={e => setMyAccount({
                            //     ...myAccount,
                            //     accountPlainPassword: e.target.value
                            // })}
                        />
                    </div>
                    <div className="information">
                        <FontAwesomeIcon icon={solid('user')} style={{
                            textAlign: "center",
                            lineHeight: "55px",
                            color: "#999898",
                            fontSize: "1.3rem"
                        }}/>
                        <input type="text" placeholder={"نام خانوادگی به فارسی"}
                            // onChange={e => setMyAccount({
                            //     ...myAccount,
                            //     accountPlainPassword: e.target.value
                            // })}
                        />
                    </div>
                </div>
            </div>
            <div className={"ticket-buy-button"}>

            <button className="buy">
                <p>sdasds</p>
            </button>
            </div>

        </div>
    )
}