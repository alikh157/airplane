import './App.css';
import {MainPage} from "./pages/mainPage/MainPage";
import {CallUsPage} from "./pages/callUsPage/CallUsPage";
import {AboutUsPage} from "./pages/aboutUsPage/AboutUsPage";
import {ProfilePage} from "./pages/profilePage/ProfilePage";
import {Routes, Route, Link} from "react-router-dom";
import {SearchResultContextProvider} from "./contexts/SearchResultContext";
import {Result} from "./components/result/Result";
import {Login} from "./components/login/Login";
import Footer from "./components/footer/Footer";
import {createTheme, ThemeProvider, styled} from '@mui/material/styles';
import {AccountContextProvider} from "./contexts/AccountContext";

const baseTheme = createTheme({
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
        <div className="App">

            <AccountContextProvider>
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/result"} element={<Result/>}/>
                    <Route path={"/profile"}
                           element={window.localStorage.getItem("accountPhoneNumber") ? <ProfilePage/> : <Login/>}/>
                    <Route path={"/footer"} element={<Footer/>}/>
                    <Route path={"/callus"} element={<CallUsPage/>}/>
                    <Route path={"/about"} element={<AboutUsPage/>}/>
                </Routes>
            </AccountContextProvider>
        </div>
    );
}

export default App;
