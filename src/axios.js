import axios from 'axios'; 

//using base URL to make the request of movie from database 
/*create the instance so that every single time we do instance.get('/smt') will insert "smt" to the
tails of the baseURL*/
const instance = axios.create({baseURL: "https://api.themoviedb.org/3"}); 

export default instance; 


