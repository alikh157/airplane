import React, {useEffect, useState, useContext} from 'react'
import {SearchResultContext} from "../../contexts/SearchResultContext";
import {TicketBasketContext} from "../../contexts/TicketBasketContext";
import './mainPage.css'
import SearchBar from '../../components/searchBar/SearchBar';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {Result} from "../../components/result/Result";
import * as api from "../../api";
import second from "./images/Travel-Tour.png"
import suggestImg from "./images/Desktop.png"
import Hotel from "./images/Hotel.jpg"
import third from "./images/Book-Flights.jpg"

export const MainPage = () => {
    //without context
    // const [searchResult, setSearchResult] = useState([]);
    //this is way of using context - we destructure it...
    const {searchResult, setSearchResult} = useContext(SearchResultContext);
    //in this way of typing this useEffect rendered once at first.
    //if we want to run this depend on some variable, we set them in deps array
    useEffect(() => {
        api.readAllTrips({
            onError: (error) => {
                //here we can define what we wanna do with an error
                console.log(error);
            }, onSuccess: (tickets) => {
                //here we can define what we wanna do with tickets
                setSearchResult(tickets);
            }
        })
    }, []);

    return (
        <div className={'page-container'}>
            <Header/>
            <div className="searchBar">
                <SearchBar/>
            </div>
            <div className="between">
                <a href="https://3click.com/hotel">
                    <div className="news"
                         style={{backgroundImage: `url(${Hotel})`, "width": '400px', 'height': '200px'}}>
                        چگونه یک هتل به صرفه پیدا کنم؟
                    </div>
                </a>
                <a href="https://3click.com/tour">
                    <div className="news"
                         style={{backgroundImage: `url(${second})`, "width": '400px', 'height': '200px'}}>
                        تور های پر مخاطب
                    </div>
                </a>
                <a href="https://3click.com/flight">
                    <div className="news"
                         style={{backgroundImage: `url(${third})`, "width": '400px', 'height': '200px'}}>
                        بلیط های لحظه آخری
                    </div>
                </a>
            </div>
            <h5 style={{"textAlign": "center", "fontWeight": "bold", "marginBottom": "30px"}}>جدیدترین بلیط ها</h5>
            <div className="results">
                <p style={{marginTop: "20px", marginBottom: "0"}}>بلیط رفت</p>
                {
                    //rendered list of tickets from an array {with help of useState}
                    //we set index as a key for React

                    searchResult.goTrips?.map((res, index) => {
                        return <Result key={index} data={res}/>
                    })
                }
            </div>
            <div className="results">
                {
                    searchResult.comeBackTrips &&
                        <p style={{marginTop: "20px", marginBottom: "0"}}>بلیط برگشت</p>
                }
                {
                    //rendered list of tickets from an array {with help of useState}
                    //we set index as a key for React
                    searchResult.comeBackTrips?.map((res, index) => {
                        return <Result key={index} data={res}/>
                    })
                }
            </div>
            <div className={"suggest"}>
                <a href="#">
                    <img src={suggestImg} alt="banner-desktop"
                         style={{"width": '800px', "alignItems": "center", "justifyContent": "space-between"}}/>
                </a>
            </div>
            <Footer/>
        </div>
    );
}