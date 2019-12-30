import React, {useEffect, useState} from 'react';
import {backdropPath} from './Helpers/helpervars'
import axios from 'axios'
const Movie = (props) => {
    let [movie, setMovies] = useState(undefined)
    const {id} = props.match.params
    useEffect(() => { 
        const fetchData = async () => {
            const mov  = await axios.get(`/api/movies/${id}`)
            setMovies(mov.data)
        }
        fetchData()
    }, [id])
    if (movie === undefined) {
        return <h1> Loading...</h1>
    }
    console.log(movie)
    return (
        <div>
            <div className = "movie-page__header">
                <img alt = {movie.original_title} className = "movie-page__header-img" src = {`${backdropPath}${movie.backdrop_path}`} />
                <div className = "movie-page__header-overlay">
                    <div className = "movie-page__header-overlay-content">
                        <h4>{`${movie.vote_average}/10`}</h4>
                        <h2>{movie.original_title}</h2>
                        <ul>
                          {movie.genres.map((genre,index) => {
                            return <li key = {index}>{genre.name}</li>
                          })}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movie;
