import React, { useState, useEffect } from 'react'; 
import axios from "./axios";
import "./Row.css"; 

const base_url= "https://image.tmdb.org/t/p/w500"
 function Row({ title , fetchUrl, isLargeRow }){
    const [movies, setMovies] = useState([]); //giving the intial value is an empty array
    
    // if [], the useEffect will only run once the page is loaded, won't run agains. 
    useEffect(() => {
        //create a small function to fetch the data
        async function fetchData(){
            const request = await axios.get(fetchUrl); 
            // console.log(request); 
            setMovies(request.data.results); 
            return request; 
        }
        fetchData(); 
    }, [fetchUrl]) //useEffect will re-run if the fectUrl is changed. 
    // console.log(movies); 
    return(
        <div className="row-container">
            {/* title will be pass by using props */}
            <h2>{title}</h2>
            {/* a container will contains poster of each movie */}
            <div className="poster-container">
               {movies.map(
                movie=>(<img key={movie.id} 
                    className={`image-poster ${isLargeRow && "image-poster-large"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}/>)
               )}
            </div>


        </div>
    ); 
}
export default Row;