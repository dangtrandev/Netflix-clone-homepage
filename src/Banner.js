import React, {useState, useEffect } from 'react';
import requests from "./request"; 
import axios from "./axios"; 


function Banner() {
    const [moives, setMovies] = useState([]); 
    // return the empty [] so that useEffect only run once the webpage is reloaded
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending); 
            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length -1)]);
            return request;  
        }; 
        fetchData(); 
    }, [])
    console.log(movies);


  return (
    <header>
        {/* Background Movie Poster */}
        {/* title */}
        {/* Two Button */}
        {/* Description */}
    </header>
  )
}

export default Banner