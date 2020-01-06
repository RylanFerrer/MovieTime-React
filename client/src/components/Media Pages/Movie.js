import React, {useEffect, useState} from 'react';
import MediaHeader from '../MediaHeader'
import Cast from '../Cast'
import {backdropPath} from '../Helpers/helpervars'
import LoadingScreen from '../Loading/LoadingScreen'
import SimilarSlider from '../Sliders/SimilarSlider'
import Trailer from "../Trailer"
import axios from 'axios'
const Movie = (props) => {
    const [movie, setMovies] = useState(undefined)
    const [cast,setCast] = useState(undefined)
    const [recco, setRecco] = useState(undefined)
    const [trailer, setTrailer] = useState(undefined)
    const [reviews, setReviews] = useState(undefined)
    const [loading, setLoading] =useState(true)

    const {id} = props.match.params
    useEffect(() => { 
        const fetchData = async () => {
           const [mov, actors,reccomended, trailerData, reviewsData] = await 
           Promise.all([
               axios.get(`/api/movies/${id}`), axios.get(`/api/movies/cast/${id}`), axios.get(`/api/movies/similar/${id}`), axios.get(`/api/movies/videos/${id}`),
               axios.get(`/api/movies/reviews/${id}`)
            ])
            setMovies(mov.data)
            setCast(actors.data)
            setRecco(reccomended.data)
            setReviews(reviewsData.data.results.slice(0,4))
            setTrailer(trailerData.data.results[0])
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
            <Trailer media = {movie} trailer = {trailer}/>
            <h1>Overview</h1>
            <h3 className = "text-padding">{movie.overview}</h3>
            <Cast mediaType = "movie" cast = {cast}/>
           <h1>Similar Movies</h1>
           <SimilarSlider mediaList = {recco} mediaType = {"movie"}/>
           <h1>Recent Reviews</h1>
           <div className = "review__container">
            {
            
            reviews.length === 0 ? <h1>Sorry there are no reviews :(</h1> :reviews.map((review, index) => {
                return (
                    <div className = {`${index % 2 === 0 ? "review--one": "review--two"} review`}key = {index}>
                        <h3>{review.author}</h3>
                        <h4>{review.content}</h4>
                    </div>
                )
            })}
           </div>    
        </div>
    );
}

export default Movie;
