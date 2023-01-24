import React from "react"; 
import "./App.css"; 
import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js"
import Homepage from "./Pages/Homepage"



export default class App extends React.Component(){
    constructor(props) {
        super(props); 
        // this.state ={

        // }
    }

    render() {
        return(
            <div id="container">
                <Header />
                <Homepage />
                <Footer />
            </div>
        );
    }
}