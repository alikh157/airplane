import './App.css';
import {MainPage} from "./pages/mainPage/MainPage";
import {CallUsPage} from "./pages/callUsPage/CallUsPage";
import {AboutUsPage} from "./pages/aboutUsPage/AboutUsPage";
import {Routes, Route, Link} from "react-router-dom";
import {SearchResultContextProvider} from "./contexts/SearchResultContext";
import {Result} from "./components/result/Result";
import {Login} from "./components/login/Login";
import Footer from "./components/footer/Footer";
import {createTheme, ThemeProvider, styled} from '@mui/material/styles';

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

            <SearchResultContextProvider>
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/result"} element={<Result/>}/>
                    <Route path={"/footer"} element={<Footer/>}/>
                    <Route path={"/callus"} element={<CallUsPage/>}/>
                    <Route path={"/about"} element={<AboutUsPage/>}/>
                </Routes>
            </SearchResultContextProvider>
        </div>
    );
}

export default App;
