import React, {useEffect, useState} from "react";
import './buy.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {regular, solid} from "@fortawesome/fontawesome-svg-core/import.macro";

export const Buy = ({onChange}) => {
    const [buyForm, setBuyForm] = useState({
        age: "",
        birthCertificate: "",
        nationalCode: "",
        familyNameEnglish: "",
        nameEnglish: "",
        email: "",
        namePersian: "",
        familyNamePersian: ""
    })
    useEffect(()=>{
        // console.log(buyForm)
        onChange(buyForm)
    },[buyForm])
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
                               onChange={e => setBuyForm({
                                   ...buyForm,
                                   age: e.target.value
                               })}
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
                               onChange={e => setBuyForm({
                                   ...buyForm,
                                   birthCertificate: e.target.value
                               })}
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
                               onChange={e => setBuyForm({
                                   ...buyForm,
                                   nationalCode: e.target.value
                               })}
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
                               onChange={e => setBuyForm({
                                   ...buyForm,
                                   familyNameEnglish: e.target.value
                               })}
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
                               onChange={e => setBuyForm({
                                   ...buyForm,
                                   nameEnglish: e.target.value
                               })}
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
                               onChange={e => setBuyForm({
                                   ...buyForm,
                                   email: e.target.value
                               })}
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
                               onChange={e => setBuyForm({
                                   ...buyForm,
                                   namePersian: e.target.value
                               })}
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
                               onChange={e => setBuyForm({
                                   ...buyForm,
                                   familyNamePersian: e.target.value
                               })}
                        />
                    </div>
                </div>
            </div>
            <div className={"ticket-buy-button"}>
                <button className="buy">
                    <p>ثبت اطلاعات</p>
                </button>
            </div>

        </div>
    )
}