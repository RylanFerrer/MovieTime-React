import React,  {useEffect, useState} from 'react';
import HomeCarousel from './Carousels/HomeCarousel'
import HomeSlider from './Sliders/HomeSlider'
import LoadingScreen from './Loading/LoadingScreen'
import axios from 'axios'
const Home = () => {
   let [loading, setLoading] = useState(false)
   let [popularMovies, setPopularMovies] = useState(undefined)
   let [carouselMovies, setCarouselMovies] = useState(undefined)
   let [isErr,setErr] = useState(false)
   let [latestMovies, setLatestMovies] = useState(undefined)
   let [popularShows, setPopularShows] = useState(undefined)
    useEffect(() => { 
        const fetchData = async () => {
           
            try {
                const [popular, latest, popularshow] =  await Promise.all([axios.get('/api/movies/popular'), axios.get('/api/movies/latest'), axios.get('/api/tv/popular')])
                setPopularMovies(popular.data)
                setLatestMovies(latest.data)
                setPopularShows(popularshow.data)
                setCarouselMovies(popular.data.results.slice(0,3))
                setLoading(true)
            } catch(err) {
                setErr(true)
            }
        }
       fetchData()
     
    }, [])
    //Check if there are any errors
    if(isErr === true ) {
        return <h1>Sorry there was an error :(</h1>
    }
    //Add a loading page so data can load
    if (loading === false) {
        return  <LoadingScreen/>
    } 
   
    return (
        <div>
            <HomeCarousel movies = {carouselMovies}/>
            <h1>Latest Movies</h1>
            <HomeSlider mediaType = "movie" mediaList = {latestMovies}/>
            <h1>Popular Movies</h1>
            <HomeSlider  mediaType = "movie" mediaList = {popularMovies} />
            <h1>Popular Shows</h1>
            <HomeSlider mediaType = 'tv' mediaList = {popularShows}/>
         
        </div>
    );
}

export default Home;
