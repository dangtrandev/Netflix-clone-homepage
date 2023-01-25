import { React, useState, useEffect } from 'react'; 
import axios from "./axios";
import App from "./App";
import "./Row.css"; 

 function Row({ title , fetchUrl }){
    const [movie, setMovie] = useState([]); //giving the intial value is an empty array
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl); 
            console.table(request.data.result); 
        }
        fetchData(); 
    }, []) // the reason using the blank bracklet is the code will run once when the page is loaded, and don't run again. 
    
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