const API_KEY = 'b619ab80e0ba04b261203d1a63903442'

const request = {
   fetchTrending: `/trending/all/week?api_key=${API_KEY}` ,
   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}`,
   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
   fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default request