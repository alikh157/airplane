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
                console.log(tickets);
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
                <div className="news" style={{backgroundImage: `url(${Hotel})`, "width": '400px', 'height': '200px'}}>
                    <a href="">چگونه یک هتل به صرفه پیدا کنم؟</a>
                </div>
                <div className="news" style={{backgroundImage: `url(${second})`, "width": '400px', 'height': '200px'}}>
                    <a href="">تور های پر مخاطب</a>
                </div>
                <div className="news" style={{backgroundImage: `url(${third})`, "width": '400px', 'height': '200px'}}>
                    <a href="">بلیط های لحظه آخری</a>
                </div>
            </div>
            <h5 style={{"textAlign": "center", "fontWeight":"bold", "marginBottom":"30px"}}>جدیدترین بلیط ها</h5>
            <div className="results">
                {
                    //rendered list of tickets from an array {with help of useState}
                    //we set index as a key for React
                    searchResult.map((res, index) => {
                        return <Result key={index} data={res}/>
                    })
                }
            </div>
            <div className={"suggest"}>
                <a href="#">
                    <img src={suggestImg} alt="banner-desktop" style={{"width":'800px' , "alignItems":"center","justifyContent":"space-between"}}/>
                </a>
                {/*<a href="/suggestion/">*/}
                {/*    <img src="/images/home/Mobile.png" alt="banner-mobile"/>*/}
                {/*</a>*/}
            </div>
            <Footer/>
        </div>
    );
}