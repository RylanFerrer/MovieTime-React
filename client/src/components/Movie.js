import React, {useEffect, useState} from 'react';
import {backdropPath} from './API/url'
import axios from 'axios'
const Movie = (props) => {
    let [movie, setMovies] = useState(undefined)
    useEffect(() => { 
        const fetchData = async () => {
            const mov  = await axios.get(`/api/movies/${props.match.params.id}`)
            console.log(mov)
            setMovies(mov.data)
        }
        fetchData()
    }, [])
    if (movie === undefined) {
        return <h1> Loading...</h1>
    }
    return (
        <div>
            <h1>{movie.original_title}</h1>
            <img  className = "test" src = {`${backdropPath}${movie.backdrop_path}`} />
        </div>
    );
}

export default Movie;
