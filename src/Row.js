import React, { useState, useEffect } from 'react'; 
import axios from "./axios";
import "./Row.css"; 
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url= "https://image.tmdb.org/t/p/w500"
 function Row({ title , fetchUrl, isLargeRow }){
    const [movies, setMovies] = useState([]); //giving the intial value is an empty array
    const [trailerUrl, setTrailerUrl] = useState(""); 
    
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

    //the style of video trailer 
    const opts ={
        height: "390", 
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }

    const handleClick = (movie) =>{
        if (trailerUrl) {   //the trick to handle the double click from user 
            setTrailerUrl(''); 
        } else {
            movieTrailer(movie?.name || "")
            .then(url => {
                // https://www.youtube.com/watch?v=534_TUled-4
                const urlParameter = new URLSearchParams(new URL(url).search); 
                setTrailerUrl(urlParameter.get('v')); 
            })
            .catch(error => console.log(error))
        }
    }
    return(
        <div className="row-container">
            {/* title will be pass by using props */}
            <h2>{title}</h2>
            {/* a container will contains poster of each movie */}
            <div className="poster-container">
               {movies.map(
                movie=>(<img key={movie.id} 
                    onClick={() => handleClick(movie)}
                    className={`image-poster ${isLargeRow && "image-poster-large"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}/>)
               )}
            </div>
            {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    ); 
}
export default Row;