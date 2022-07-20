import React from 'react';
import './App.css';
import {Navigation} from "./layoutcomponents/Navigation";
import {Content} from "./layoutcomponents/Content";
import {Header} from "./layoutcomponents/Header";
import "./App.css"
import {Footer} from "./layoutcomponents/Footer";


const App = () => {
    return (
        <div className={"App"}>
            <div className={"container"}>
                <Header/>
                <Navigation/>
                <Content/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
