import './App.css';
import {MainPage} from "./pages/mainPage/MainPage";
import {Routes, Route, Link} from "react-router-dom";
import {Result} from "./components/result/Result";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/result"} element={<Result/>}/>
                <Route path={"/footer"} element={<Footer/>}/>
            </Routes>
        </div>
    );
}

export default App;
