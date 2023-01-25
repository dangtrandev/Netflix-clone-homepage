//where the api key will be contains 
const API_KEY = "1651d7a28b7fb3b2e688cc7c829dca1b"; 


const requests = {
    fetchTrending: `trending/movie/week?api_key=${API_KEY}`,
    fetchUpComing: `upcoming?api_key=${API_KEY}&language=en-US&page=1`
  }

  export default requests; 