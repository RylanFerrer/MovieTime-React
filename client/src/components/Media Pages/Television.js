import React, {useEffect, useState} from 'react';
import LoadingScreen from '../Loading/LoadingScreen'
import axios from 'axios'
import MediaHeader from '../MediaHeader'
import Cast from '../Cast'
import SimilarSlider from '../Sliders/SimilarSlider'
import {backdropPath} from '../Helpers/helpervars'
import Trailer from "../Trailer"
const Television = (props) => {
    const {id} = props.match.params
    const[loading, setLoading] = useState(false)
    const [cast,setCast] = useState(undefined)
    const [trailer, setTrailer] = useState(undefined)
    const [similar, setSimilar] = useState(undefined)
    const [reviews, setReviews] = useState(undefined)
    const [tv, setTv] = useState(undefined)
    useEffect(() => { 
        const fetchData = async () => {
            const [mov, actors,sim,trailerData, reviewsData] = await 
            Promise.all([ axios.get(`/api/tv/${id}`),axios.get(`/api/tv/cast/${id}`), axios.get(`/api/tv/similar/${id}`), 
            axios.get(`/api/tv/videos/${id}`), axios.get(`/api/tv/reviews/${id}`)]) 
            setTv(mov.data)
            setCast(actors.data)
            setSimilar(sim.data)
            setTrailer(trailerData.data.results[0])
            setReviews(reviewsData.data.results.slice(0,4))
            setLoading(true)
            window.scrollTo(0, 0)
        }
        fetchData()
      
    }, [id])
    if(loading === false) {
        return <LoadingScreen/>
    }
    console.log(tv)
    return (
        <div> 
            <MediaHeader title = {tv.original_name} backdrop = {`${backdropPath}${tv.backdrop_path}`} rating = {tv.vote_average} genres = {tv.genres} />
            <Trailer trailer = {trailer} media = {tv}/>
            <h1>Overview</h1>
            <h3 className = "text-padding">{tv.overview}</h3>
            <Cast cast = {cast}/>
            <h1>Similar Shows</h1>
            <SimilarSlider mediaList = {similar} mediaType = 'tv'/>
            <h1>Reviews</h1>
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

export default Television;
