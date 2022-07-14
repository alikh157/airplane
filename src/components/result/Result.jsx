import React from "react";
import './result.css'
import Paper from '@mui/material/Paper';
import {Box} from "@mui/material";
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import apiConstant from "../../apiConstant";
import Asset from "./images/SVG/Asset.svg";
import airplane_landing from "./images/airplane_landing_red.png";
import airplane_take_off from "./images/airplane_take_off_red.png";

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
    const {
        ticketName = '',
        ticketDst = '',
        ticketSrc = '',
        ticketPrice = '',
        ticketInternalOrExternal = '',
        ticketBusinessOrEconomy = '',
        ticketNumber = '',
        ticketAirplaneObject: {
            airplaneAirlineName = '',
            airplaneModel = '',
            airplaneImageSrc,
            airplaneCapacity = '',
            airplaneFlightNumber = '',
            airplaneTicketTakeOffTime = '',
            airplaneTicketLandingTime = ''
        } = {},
    } = data;
    return (
        <Stack className="result" direction="row" spacing={2}>
            <Item className="buyButton">
                <button className="buy">
                    <a href="#">
                        انتخاب بلیط
                    </a>
                </button>
                <p className="cost">{ticketPrice}تومان</p>
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
                    <h6 className="city">{ticketSrc}</h6>
                    <img className={"imageHint"} src={airplane_take_off} alt="taking off"/>
                    <p className="time">{airplaneTicketTakeOffTime}</p>
                </div>
                <div className="travelImage">
                    <img src={Asset} style={{height: "auto", width: '190px'}} alt="travel image"/>
                </div>
                <div className="dst">
                    <h6 className="city">{ticketDst}</h6>
                    <img className={"imageHint"} src={airplane_landing} alt="landing"/>
                    <p className="time">{airplaneTicketLandingTime}</p>
                </div>
                <div className="flight">
                    <p className="type">{ticketBusinessOrEconomy}</p>
                    <p className="num">{airplaneCapacity}</p>
                </div>
            </Item>
            <Item>
                <div className="factory">
                    <img src={`${apiConstant.BASE_URL}/airplane/get/img?fileName=${airplaneImageSrc}`} width="70px"
                         height="60px"
                         alt="کاسپین"/>
                    <p>{airplaneAirlineName}</p>
                </div>
            </Item>
        </Stack>
    )
}
