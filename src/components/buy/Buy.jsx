import React, {useContext, useEffect, useState} from "react";
import './buy.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {regular, solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {v4 as uuidv4} from 'uuid';
import {TicketBasketContext} from "../../contexts/TicketBasketContext";

export const Buy = ({defaultFormValue, tripId}) => {
    // const {finalTrip, setFinalTrip} = useContext(BuyFormContext);
    const {ticketBasket, setTicketBasket} = React.useContext(TicketBasketContext);
    // console.log(defaultFormValue)
    const [buyForm, setBuyForm] = useState(defaultFormValue ? defaultFormValue : {
        formId: uuidv4(),
        age: "",
        birthCertificate: "",
        nationalCode: "",
        familyNameEnglish: "",
        nameEnglish: "",
        email: "",
        namePersian: "",
        familyNamePersian: ""
    })
    const otherTrips = ticketBasket.filter(basketObj => basketObj.tripId !== tripId)
    const TripIndex = ticketBasket.findIndex(basketObj => basketObj.tripId === tripId)
    useEffect(() => {
        let basketTripData = ticketBasket.find(basketObj => basketObj.tripId === tripId)
        let newBasketTripDataFormData = {
            ...basketTripData.formsData,
            [buyForm.formId]: buyForm
        }
        let newTicketBasket = ticketBasket
        newTicketBasket[TripIndex] = {
            ...basketTripData,
            formsData: newBasketTripDataFormData
        }
        setTicketBasket([
            ...newTicketBasket
        ])


    }, [buyForm]);
    // useEffect(() => {
    //     console.log(finalTrip)
    // }, [finalTrip]);
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
                               value={buyForm.age} required
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
                               value={buyForm.birthCertificate} required
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
                               value={buyForm.nationalCode} required

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
                               value={buyForm.familyNameEnglish} required

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
                               value={buyForm.nameEnglish} required

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
                               value={buyForm.email} required

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
                               value={buyForm.namePersian} required

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
                               value={buyForm.familyNamePersian} required
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}