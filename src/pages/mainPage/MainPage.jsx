import React, {useEffect, useState,useContext} from 'react'
import {SearchResultContext} from "../../contexts/SearchResultContext";
import './mainPage.css'
import SearchBar from '../../components/searchBar/SearchBar';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {Result} from "../../components/result/Result";
import {Login} from "../../components/login/Login";
import * as api from "../../api";

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
            <div className="results">
                {
                    //rendered list of tickets from an array {with help of useState}
                    //we set index as a key for React
                    searchResult.map((res,index) => {
                        return <Result key={index} data={res}/>
                    })
                }
            </div>
            <Footer/>
        </div>
    );
}