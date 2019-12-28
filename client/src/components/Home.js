import React,  {useEffect, useState} from 'react';
import {posterPath} from './API/url'
import {Link} from 'react-router-dom'
import axios from 'axios'
const Home = () => {
   let [popularMovies, setPopularMovies] = useState(undefined)
    useEffect(() => { 
        const fetchData = async () => {
            const popMovies  = await axios.get('/api/movies')
            console.log(popMovies)
            setPopularMovies(popMovies.data)
        }
        fetchData()
    }, [])
    if (popularMovies === undefined) {
        return <h1>Loading....</h1>
    }
    return (
        <div>
            <h1>Home Page</h1>
            {
                popularMovies.results.map(movie => {
                    return (
                    <div>
                          <h1>{movie.original_title}</h1>
                          <Link to = {`/movie/${movie.id}`}>
                            <img src = {`${posterPath}${movie.poster_path}`}/>
                          </Link>
                         
                          <p>{movie.overview}</p>
                    </div>
                  
                    ) 
                })
            }
        </div>
    );
}

export default Home;
