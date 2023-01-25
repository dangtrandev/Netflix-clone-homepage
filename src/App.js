import React from "react"; 
import "./App.css"; 
import Row from "./Row"; 
import requests from "./request";


export default function App() {
    return(
        <div>
            {/* each row is one components */}
            <Row title="Popular"        fetchUrl={requests.fetchPopular}/>
            <Row title="Up Coming"      fetchUrl={requests.fetchUpComing}/>
            <Row title="Trending Now"   fetchUrl={requests.fetchTrending}/>
        </div>
    );
}