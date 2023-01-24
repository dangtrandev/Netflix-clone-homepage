import React from "react"; 
import "./App.css"; 
import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js"
import Homepage from "./Pages/Homepage"



export default function App(){
    return(
        <div id="container">
            <Header />
            <Homepage />
            <Footer />
        </div>
    );
}