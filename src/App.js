import React from "react"; 
import "./App.css"; 
import Row from "./components/Row/Row"; 
import requests from "./request";


export default function App() {
    return(
        <div>
            {/* each row is one components */}
            <Row  title="Netflix Original" fetchUrl={requests.fetchNetflixOrginals}/>
            <Row  title="Trending Now" fetchUrl={requests.fetchTrending}/>
        </div>
    );
}