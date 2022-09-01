import React from 'react';
import {Buy} from "../buy/Buy";

export const Trip = ({basketObj}) => {
    const {
        trip,
        tripId,
        amount,
        formsData
    } = basketObj
    console.log(formsData)
    // let arr = formsData ? Object.keys(formsData) : new Array(amount).fill(undefined).map((val, idx) => idx);
    let arr;
    if (formsData && Object.keys(formsData).length == amount) {
        arr = Object.keys(formsData)
    } else {
        arr = new Array(amount).fill(undefined).map((val, idx) => idx);
    }

    return (
        <div className="trip-container">
            {
                arr.map((arrObj, index) => <Buy key={index} tripId={tripId}
                                                defaultFormValue={(formsData && formsData[arrObj]) ? formsData[arrObj] : null}/>
                )
            }
        </div>
    )
}