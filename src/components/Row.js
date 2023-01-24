import { React, useState } from 'react'; 


export default function Row({ title }){
    const [movie, setMovie] = useState([]); //giving the intial value is an empty array
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