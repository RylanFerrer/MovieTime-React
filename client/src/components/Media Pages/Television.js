import React, {useEffect, useState} from 'react';
import LoadingScreen from '../Loading/LoadingScreen'
import axios from 'axios'
import MediaHeader from '../MediaHeader'
import Cast from '../Cast'
import SimilarSlider from '../Sliders/SimilarSlider'
import {backdropPath} from '../Helpers/helpervars'
const Television = (props) => {
    const {id} = props.match.params
    const[loading, setLoading] = useState(false)
    const [cast,setCast] = useState(undefined)
    const [similar, setSimilar] = useState(undefined)
    const [tv, setTv] = useState(undefined)
    useEffect(() => { 
        const fetchData = async () => {
            const [mov, actors,sim] = await Promise.all([ axios.get(`/api/tv/${id}`),axios.get(`/api/tv/cast/${id}`), axios.get(`/api/tv/similar/${id}`)]) 
            setTv(mov.data)
            setCast(actors.data)
            setSimilar(sim.data)
            setLoading(true)
            window.scrollTo(0, 0)
        }
        fetchData()
      
    }, [id])
    if(loading === false) {
        return <LoadingScreen/>
    }
    console.log(cast)
    return (
        <div> 
            <MediaHeader title = {tv.original_name} backdrop = {`${backdropPath}${tv.backdrop_path}`} rating = {tv.vote_average} genres = {tv.genres} />
            <Cast cast = {cast}/>
            <h1>Similar Shows</h1>
            <SimilarSlider mediaList = {similar} mediaType = 'tv'/>
        </div>
    );
}

export default Television;
