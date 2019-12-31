import React, {useEffect, useState} from 'react';
import MediaHeader from '../MediaHeader'
import {backdropPath} from '../Helpers/helpervars'
import LoadingScreen from '../Loading/LoadingScreen'
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
        return  <LoadingScreen/> }
    console.log(movie)
    return (
        <div>
           <MediaHeader rating = {movie.vote_average} title = {movie.original_title} genres = {movie.genres} backdrop = {`${backdropPath}${movie.backdrop_path}`}/>
        </div>
    );
}

export default Movie;
