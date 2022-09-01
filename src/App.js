import './App.css';
import {MainPage} from "./pages/mainPage/MainPage";
import {CallUsPage} from "./pages/callUsPage/CallUsPage";
import {AboutUsPage} from "./pages/aboutUsPage/AboutUsPage";
import {ProfilePage} from "./pages/profilePage/ProfilePage";
import {PaymentPage} from "./pages/paymentPage/PaymentPage";
import {Routes, Route, Link} from "react-router-dom";
import {SearchResultContextProvider} from "./contexts/SearchResultContext";
import {Result} from "./components/result/Result";
import {Login} from "./components/login/Login";
import Footer from "./components/footer/Footer";
import {createTheme, ThemeProvider, styled} from '@mui/material/styles';
import {AccountContextProvider} from "./contexts/AccountContext";
import {TicketBasketContextProvider} from "./contexts/TicketBasketContext";
import RTL from './RTL';
import {Buy} from "./components/buy/Buy";

const baseTheme = createTheme({
    direction: "rtl",
    palette: {
        primary: {
            main: "#ff1f71",
            dark: "",
            light: ""
        },
    }
})

function App() {
    return (
        <RTL>
            <div className="App">
                <TicketBasketContextProvider>
                    <SearchResultContextProvider>
                            <AccountContextProvider>
                                <Routes>
                                    <Route path={"/"} element={<MainPage/>}/>
                                    <Route path={"/login"} element={<Login/>}/>
                                    <Route path={"/result"} element={<Result/>}/>
                                    <Route path={"/profile"}
                                           element={window.localStorage.getItem("accountPhoneNumber") ? <ProfilePage/> :
                                               <Login/>}/>
                                    <Route path={"/footer"} element={<Footer/>}/>
                                    <Route path={"/callus"} element={<CallUsPage/>}/>
                                    <Route path={"/about"} element={<AboutUsPage/>}/>
                                    <Route path={"/pay"} element={<PaymentPage/>}/>
                                </Routes>
                            </AccountContextProvider>
                    </SearchResultContextProvider>
                </TicketBasketContextProvider>
            </div>
        </RTL>
    );
}

export default App;
