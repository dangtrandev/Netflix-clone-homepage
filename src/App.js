import React from "react"; 
import Header from "./components/Header/Header.js"
import Banner from "./components/Banner/Banner.js"
import Footer from "./components/Footer/Footer.js"


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
                <Banner />
                <Footer />
            </div>
        );
    }
}