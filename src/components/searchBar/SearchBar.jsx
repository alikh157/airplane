import React from 'react';
import searchBar from './searchBar.css'
import economy from './images/cheap.png';
import globe from './images/globe.png';
import business from './images/business.png'
import internal from './images/internal.png';
import air3 from './images/air3.jpg';
import * as api from "../../api";

const SearchBar = () => {
    const SearchSubmitLoginHandler=(e)=>{
        e.preventDefault();
        api.tripSearch(account, {
            onError: (err) => {
                console.log(err.message);
            }, onSuccess: (msg) => {
                localStorage.setItem('auth-token', msg);
                localStorage.setItem('accountPhoneNumber', account.accountPhoneNumber);
                navigate('/');
                console.log(msg);
            }
        })

    }
    return (
            <div className="search">
                {/*<img width={"1600px"} height={"1000px"} src={air3} alt="airplane"*/}
                {/*     className={"search-bg"}/>*/}
                <h1>پرواز خود را پیدا کنید</h1>
                <form onSubmit={SearchSubmitLoginHandler}>
                    <input type="text" placeholder='&#x270e; شهر مبداء'/>
                    <input type="text" placeholder='&#x270e; شهر مقصد'/>
                    <button type={"submit"}>جست و جو</button>
                </form>
                <div className="category-list">
                    <div className="category">
                        <img src={business} alt="business"/>
                        <p>پرواز بیزینس</p>
                    </div>
                    <div className="category">
                        <img src={economy} alt="economy"/>
                        <p>پرواز اقتصادی</p>
                    </div>
                    <div className="category">
                        <img src={internal} alt="internal"/>
                        <p>پرواز داخلی</p>
                    </div>
                    <div className="category">
                        <img src={globe} alt="international"/>
                        <p>پرواز خارجی</p>
                    </div>
                </div>
            </div>
    );
};

export default SearchBar;
