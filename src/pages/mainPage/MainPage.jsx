import React from 'react';
import SearchBar from '../components/searchBar/SearchBar';
import Header from "../components/header/Header";

export const MainPage = () => {
    return (
        <div className={'container'}>
            <Header/>
            <div className="searchBar">
                <SearchBar/>
            </div>
        </div>
    );
}