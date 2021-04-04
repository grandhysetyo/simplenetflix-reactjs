import React, {useState, useEffect} from 'react'
import axios from '../axios'

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
        <div className ="row">
            <h2>{props.title}</h2>
            <div className ="poster">
                <img src="" className ="img-poster" alt=""/>
            </div>
        </div>
    )
}

export default Movie;