import React,  {useEffect, useState} from 'react';
import HomeSlider from './Sliders/HomeSlider'
import axios from 'axios'
const Home = () => {
   let [popularMovies, setPopularMovies] = useState(undefined)
   let [latestMovies, setLatestMovies] = useState(undefined)
   let [popularShows, setPopularShows] = useState(undefined)
    useEffect(() => { 
        const fetchData = async () => {
            const [popular, latest, popularshow] =  await Promise.all([axios.get('/api/movies/popular'), axios.get('/api/movies/latest')])
            setPopularMovies(popular.data)
            console.log(latest.data)
            setLatestMovies(latest.data)
        }
        fetchData()
    }, [])
    if (popularMovies === undefined || latestMovies === undefined) {
        return <h1>Loading....</h1>
    }
    return (
        <div>
            <h1>Home Page</h1>
            <h1>Latest Movies</h1>
            <HomeSlider mediaType = "movie" mediaList = {latestMovies}/>
            <h1>Popular Movies</h1>
            <HomeSlider  mediaType = "movie" mediaList = {popularMovies} />
            <h1>Popular Shows</h1>
         
        </div>
    );
}

export default Home;
