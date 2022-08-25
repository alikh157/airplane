import React, {useEffect} from "react";
import './result.css'
import {Box} from "@mui/material";
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import apiConstant from "../../apiConstant";
import Asset from "./images/SVG/Asset.svg";
import airplane_landing from "./images/airplane_landing_red.png";
import airplane_take_off from "./images/airplane_take_off_red.png";
import {TicketBasketContext} from "../../contexts/TicketBasketContext";
import Counter from "../counter/Counter";

const Item = styled(Box)(({theme}) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    direction: 'row',
    gap: "20px",
    color: theme.palette.text.secondary,
}));

//we select 'data' from props that have key and data
export const Result = ({data}) => {
    const {ticketBasket, setTicketBasket} = React.useContext(TicketBasketContext);
    //for debug
    useEffect(function () {
    }, [ticketBasket])
    const {
        tripAirplaneObject: {
            tripAirplaneId = '',
            tripAirplaneAirlineName = '',
            tripAirplaneModel = '',
            tripAirplaneImageSrc = '',
            tripAirplaneCapacity = '',
            tripAirplaneFlightNumber = '',
            tripAirplaneCreateAt = ''
        } = {},
        tripId = "",
        tripName = '',
        tripDst = '',
        tripSrc = '',
        tripPrice = '',
        tripTakeOffTime = '',
        tripLandingTime = '',
        tripDate = '',
        tripInternalOrExternal = '',
        tripBusinessOrEconomy = '',
    } = data;
    const handleAddToBasket = (e) => {
        setTicketBasket([...ticketBasket, {trip: data, amount: 1, tripId: tripId}]);
    }
    return (
        <Stack className="result" direction="row" spacing={2}>
            <Item className="buyButton">
                {
                    ticketBasket.filter(trip => trip.tripId === tripId && trip.amount > 0).length > 0 ?
                        <Counter
                            value={ticketBasket.filter(trip=>trip.tripId === tripId)[0].amount}
                            onUpdate={(newValue) => {
                                if(newValue == 0){
                                    setTicketBasket([...ticketBasket.filter(trip=>trip.tripId != tripId)])
                                }
                                else{
                                    setTicketBasket([...ticketBasket.filter(trip=>trip.tripId != tripId), {trip: data, amount: newValue, tripId: tripId}])
                                }
                        }}/> :
                        <button className="buy" onClick={() => handleAddToBasket()}>
                            <a href={null}> انتخاب بلیط </a>
                        </button>
                }
                <p className="cost">{tripPrice} تومان </p>
            </Item>
            <Item sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
                gap: "100px",
                alignItems: "center",
            }}>
                <div className="src">
                    <h6 className="city">{tripSrc}</h6>
                    <img className={"imageHint"} src={airplane_take_off} alt="taking off"/>
                    <p className="time">{tripTakeOffTime}</p>
                </div>
                <div className="travelImage">
                    <img src={Asset} style={{height: "auto", width: '190px'}} alt="travel image"/>
                    {/*<p className="time" style={{marginTop:'5px'}}>{tripDate}</p>*/}
                </div>
                <div className="dst">
                    <h6 className="city">{tripDst}</h6>
                    <img className={"imageHint"} src={airplane_landing} alt="landing"/>
                    <p className="time">{tripLandingTime}</p>
                </div>
                <div className="flight">
                    <p className="type">{tripBusinessOrEconomy}</p>
                    <p className="num">{tripAirplaneCapacity}</p>
                </div>
            </Item>
            <Item sx={{
                display: "flex",
                flexDirection: "row",
                width: "50%",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <div className="flight">
                    <p style={{margin: '0 0 5px 0'}}>{tripSrc} به {tripDst}</p>
                    <p>{tripDate}</p>
                </div>
            </Item>
            <Item>
                <div className="factory">
                    <img src={`${apiConstant.BASE_URL}/airplane/get/img?fileName=${tripAirplaneImageSrc}`} width="70px"
                         height="60px"
                         alt="کاسپین"/>
                    <p>{tripAirplaneAirlineName}</p>
                </div>
            </Item>
        </Stack>
    )
}
