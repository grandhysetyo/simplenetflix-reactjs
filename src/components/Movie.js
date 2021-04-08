import React, {useState, useEffect} from 'react'
import axios from '../axios'
import './Movie.css';

const image_uri = 'https://image.tmdb.org/t/p/original'
function Movie(props){
     const [movies, setMovie] = useState([])
     useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(props.url)
            setMovie(request.data.results)
        }
        fetchData()
     }, [props.url])
     console.log(movies)
    return(
        <div className ="poster">
            <h2>{props.title}</h2>
            <div className ="row">
                {
                    movies.map(movie => {
                        return(
                            <img src={`${image_uri}${movie.poster_path}`} className ="img-poster" alt={movie.name} key={movie.id} />
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Movie;