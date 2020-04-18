import React from 'react'
import Rating from './rating'

const MovieCard = (props) => {

    const {movie} = props


    return( 
        <div className="card" >
            <Rating  count={movie.star} />
          <img src={movie.img} className="card-img-top" alt="..." />
          <div className="card-body">
    <h5 className="card-title">{movie.name}</h5>
    <p className="card-text">{ movie.year}</p>
           
          </div>
        </div>)
}

export default MovieCard