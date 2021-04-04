import React from 'react'

function Movie(props){
    return(
        <div className ="row">
            <h2>{props.title}</h2>
            <div className ="poster">
                <img src="" className ="img-poster"/>
            </div>
        </div>
    )
}

export default Movie;