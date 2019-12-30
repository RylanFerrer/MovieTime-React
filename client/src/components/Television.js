import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {backdropPath} from './Helpers/helpervars'
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
        return <h1>Loading...</h1>
    }
    return (
        <div>
              <h1>{tv.original_name}</h1>
            <img alt = {tv.original_name} className = "test" src = {`${backdropPath}${tv.backdrop_path}`} />         
        </div>
    );
}

export default Television;
