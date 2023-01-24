import React from "react"; 
import "./App.css"; 
import Homepage from "./Pages/Homepage/Homepage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


export default function App() {
    return(
        <div id="container">
            <Header />
            <Homepage />
            <Footer />
        </div>
    );
}