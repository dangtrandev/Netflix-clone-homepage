import React, {useState, useEffect } from 'react';
import requests from "./request"; 
import axios from "./axios"; 
import "./Banner.css"; 


function Banner() {
    const baseUrl = "https://image.tmdb.org/t/p/w500"; 
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

    // the function will limmit amount of character will be displayed + {...}
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str; 
    }


  return (
    < header 
    className="banner"
    style={{
        backgroundSize: "cover", 
        backgroundImage: `url("${baseUrl}${movies?.backdrop_path}")`,
        backgroundPosition:"center center", 
    }}>{/* Background Movie Poster */}
        <div className="banner_contents">
            <h1 className="banner_title">{/* title */}
                {movies?.title || movies?.name || movies?.original_name}
            </h1>

            <div className="banner_buttons">{/* Two Button */}
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">{truncate(movies?.overview, 150)}</h1>
        </div>
    </header>
  )
}

export default Banner