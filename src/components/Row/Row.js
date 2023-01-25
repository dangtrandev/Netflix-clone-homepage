import { React, useState, useEffect } from 'react'; 
import axios from "../../axios";


export default function Row({ title , fetchURL }){
    const [movie, setMovie] = useState([]); //giving the intial value is an empty array
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURL); 
            console.table(request.data.result); 
            setMovie(request.data.results);
            
        }

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