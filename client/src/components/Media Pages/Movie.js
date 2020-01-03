import React, {useEffect, useState} from 'react';
import MediaHeader from '../MediaHeader'
import Cast from '../Cast'
import {backdropPath} from '../Helpers/helpervars'
import LoadingScreen from '../Loading/LoadingScreen'
import SimilarSlider from '../Sliders/SimilarSlider'
import axios from 'axios'
const Movie = (props) => {
    const [movie, setMovies] = useState(undefined)
    const [cast,setCast] = useState(undefined)
    const [recco, setRecco] = useState(undefined)
    const [loading, setLoading] =useState(true)

    const {id} = props.match.params
    useEffect(() => { 
        const fetchData = async () => {
           const [mov, actors,reccomended] = await Promise.all([axios.get(`/api/movies/${id}`), axios.get(`/api/movies/cast/${id}`), axios.get(`/api/movies/similar/${id}`)])
            setMovies(mov.data)
            setCast(actors.data)
            setRecco(reccomended.data)
            setLoading(false)
        }
        fetchData()
        window.scrollTo(0, 0)
    }, [id])
    if (loading) {
        return  <LoadingScreen/> 
    }
    return (
        <div>
           <MediaHeader  rating = {movie.vote_average} title = {movie.original_title} genres = {movie.genres} backdrop = {`${backdropPath}${movie.backdrop_path}`}/>
           <Cast mediaType = "movie" cast = {cast}/>
           <h1>Similar Movies</h1>
           <SimilarSlider mediaList = {recco} mediaType = {"movie"}/>
        </div>
    );
}

export default Movie;
