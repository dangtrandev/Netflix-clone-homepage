import React from "react"; 
import "./App.css"; 
import Row from "./components/Row"; 
import request from "./request";


export default function App() {
    return(
        <div>
            {/* each row is one components */}
            <Row  title="Netflix Original" fetchUrl={fetchNetflixOrginals}/>
            <Row  title="Trending Now" fetchUrl={fetchTrending}/>
        </div>
    );
}