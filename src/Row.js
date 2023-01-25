import React, { useState, useEffect } from 'react'; 
import axios from "./axios";
import "./Row.css"; 

 function Row({ title , fetchUrl }){
    const [movie, setMovie] = useState([]); //giving the intial value is an empty array
    
    // if [], the useEffect will only run once the page is loaded, won't run agains. 
    useEffect(() => {
        //create a small function to fetch the data
        async function fetchData(){
            const request = await axios.get(fetchUrl); 
            // console.log(request); 
            setMovie(request.data.results); 
            return request; 
        }
        fetchData(); 
    }, [fetchUrl]) //useEffect will re-run if the fectUrl is changed. 
    // console.table(movie); 
    return(
        <div>
            {/* title will be pass by using props */}
            <h2>{title}</h2>
            {/* a container will contains poster of each movie */}
            <div>

            </div>


        </div>
    ); 
}
export default Row;