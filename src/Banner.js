import React, {useState, useEffect } from 'react';
import requests from "./request"; 
import axios from "./axios"; 


function Banner() {
    const baseUrl = "https://image.tmdb.org/t/p/trending/"; 
    const [movies, setMovies] = useState([]); 
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
    < header 
    className="banner"
    style={{
        backgroundSize: "cover", 
        backgroundImage: `url(${baseUrl}${movies?.backdrop_path})`,
        backgroundPosition:"center center", 
    }}>{/* Background Movie Poster */}
        
        <h1>{/* title */}
            {movies?.title || movies?.name || movies?.original_name}
        </h1>

        <div className="banner_buttons">{/* Two Button */}
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{movies?.overview}</h1>
    </header>
  )
}

export default Banner