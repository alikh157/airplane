import React, {useEffect, useState} from 'react';
import {Buy} from "../buy/Buy";

export const Trip = ({trip}) => {
    const [finalTrip, setFinalTrip] = useState({})
    const arr = new Array(trip.amount).fill(undefined).map((val, idx) => idx);
    useEffect(() => {
        console.log(finalTrip)
    }, [finalTrip]);

    return (
        <div className="trip-container">
            {
                arr.map((ticket, index) => <Buy key={index}
                                                onChange={(buyForm) => setFinalTrip({...finalTrip, [index]: buyForm})}
                                                data={ticket}/>
                )
            }
        </div>
    )
}