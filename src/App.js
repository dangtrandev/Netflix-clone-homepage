import React from "react"; 
import "./App.css"; 
import Row from "./Row"; 
import requests from "./request";
import Banner from './Banner'; 
import Nav from './Nav'; 

export default function App() {
    return(
        <div className="app">
            {/* NavBar */}
            <Nav />
            {/* banner */}
            <Banner />
            {/* each row is one components */}
            {/* top rated will have the largest piture of movie  */}
            <Row title="Top Rated"      fetchUrl={requests.fetchPopular}    isLargeRow={true}/>
            <Row title="Popular"        fetchUrl={requests.fetchPopular}/>
            <Row title="Up Coming"      fetchUrl={requests.fetchUpComing}/>
            <Row title="Trending Now"   fetchUrl={requests.fetchTrending}/>
        </div>
    );
}