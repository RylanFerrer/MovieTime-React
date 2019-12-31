import React, {useEffect, useState} from 'react';
import LoadingScreen from '../Loading/LoadingScreen'
import axios from 'axios'
import MediaHeader from '../MediaHeader'
import {backdropPath} from '../Helpers/helpervars'
const Television = (props) => {
    let [loading, setLoading] = useState(false)
    let [tv, setTv] = useState(undefined)
    useEffect(() => { 
        const fetchData = async () => {
            const mov  = await axios.get(`/api/tv/${props.match.params.id}`)
            console.log(mov)
            setTv(mov.data)
            setLoading(true)
        }
        fetchData()
    }, [props.match.params.id])
    if(loading === false) {
        return <LoadingScreen/>
    }
    console.log(tv)
    return (
        <div> 
            <MediaHeader title = {tv.original_name} backdrop = {`${backdropPath}${tv.backdrop_path}`} rating = {tv.vote_average} genres = {tv.genres} />      
        </div>
    );
}

export default Television;
