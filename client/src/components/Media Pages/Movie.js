import React, {useEffect, useState} from 'react';
import MediaHeader from '../MediaHeader'
import Cast from '../Cast'
import {backdropPath} from '../Helpers/helpervars'
import LoadingScreen from '../Loading/LoadingScreen'
import axios from 'axios'
const Movie = (props) => {
    const [movie, setMovies] = useState(undefined)
    const [cast,setCast] = useState(undefined)
    const [loading, setLoading] =useState(true)

    const {id} = props.match.params
    useEffect(() => { 
        const fetchData = async () => {
           const [mov, actors] = await Promise.all([axios.get(`/api/movies/${id}`), axios.get(`/api/movies/cast/${id}`)])
            setMovies(mov.data)
            setCast(actors.data)
            setLoading(false)
        }
        fetchData()
    }, [id])
    if (loading) {
        return  <LoadingScreen/> 
    }
    return (
        <div>
           <MediaHeader rating = {movie.vote_average} title = {movie.original_title} genres = {movie.genres} backdrop = {`${backdropPath}${movie.backdrop_path}`}/>
           <Cast cast = {cast}/>
        </div>
    );
}

export default Movie;
