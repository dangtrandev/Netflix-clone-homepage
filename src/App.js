import React from "react"; 
import "./App.css"; 
import Row from "./Row"; 
import requests from "./request";
import Banner from './Banner'; 
import Nav from './Nav'; 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default function App() {
    const firebaseConfig = {
        apiKey: "AIzaSyAtKZTwcvaYVKsexMXkmUdFMkm793NVueU",
        authDomain: "netflix-clone-dangtran.firebaseapp.com",
        projectId: "netflix-clone-dangtran",
        storageBucket: "netflix-clone-dangtran.appspot.com",
        messagingSenderId: "1052618129752",
        appId: "1:1052618129752:web:6f8af522b960f338bde52d",
        measurementId: "G-3M64TSTEV6"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
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