import React from "react"; 
import "./App.css"; 
import Row from "./components/Row"; 


export default function App() {
    return(
        <div>
            {/* each row is one components */}
            <Row  title="Netflix Original" />
            <Row  title="Trending Now" />
        </div>
    );
}