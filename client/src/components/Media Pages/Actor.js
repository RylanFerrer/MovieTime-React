import React, {useState, useEffect} from 'react';
import LoadingScreen from "../Loading/LoadingScreen"
import Tilt from 'react-tilt'
import {Link} from 'react-router-dom'
import {posterPath} from '../Helpers/helpervars'
import axios from 'axios'
const Actor = (props) => {
    const [actor, setActor] = useState(undefined)
    const [tv,setTv] = useState(undefined)
    const [movies, setMovies] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const {id} = props.match.params
    useEffect(() => {
        const fetchData = async() => {
            const info = await axios.get(`/api/actor/${id}`)
            setTv(info.data.television)
            setMovies(info.data.movies)
            setActor(info.data.actor)
            setLoading(false)
        } 
        fetchData()
    },[id])
    console.log(tv)
    if(loading) 
    {
        return <LoadingScreen/>
    }
    return (
        <div>
            <img alt = {actor.name} src = {`${posterPath}${actor.profile_path}`}/>
           <h1>{actor.name}</h1>
           <h5>{actor.biography}</h5>
           <h1>Movies</h1>
           {movies.cast.map((movie,index) => {
               if(movie.poster_path)
               return (   
               <Tilt  key = {index} className="tilt-media" options={{ max : 25 }}> 
                    <Link to = {`/movie/${movie.id}`}>
                        <img alt = {movie.original_title} src = {`${posterPath}${movie.poster_path}`}/>
                    </Link>
                </Tilt>
               )
               return false
           }) }
           <h1>Shows</h1>
           {tv.cast.map((show,index) => {
               if(show.poster_path)
               return ( 
               <Tilt key =  {index} className="tilt-media" options={{ max : 25 }}>
                   <Link to = {`/tv/${show.id}`}>
                        <img  alt = {show.original_name}src = {`${posterPath}${show.poster_path}`}/>
                   </Link>
                </Tilt>)

               return false
           }) }
        </div>
    );
}

export default Actor;
