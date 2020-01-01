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
   const getRandomMovie = (movies,times) => {
       const newArray = []
        while(newArray.length !== times)
        {
            //get random number from the length of the list of movies
            let randomMovie = Math.floor(Math.random() * movies.length)
            // if the new array does not have that movie in the array then push it in the array
            if (!newArray.includes(movies[randomMovie]))
            newArray.push(movies[randomMovie])
        }
        return newArray
   }
    useEffect(() => { 
        const fetchData = async () => {
            try {
                //try to get popular movies, latest movies, and all popular shows
                const [popular, latest, popularshow] =  await Promise.all([axios.get('/api/movies/popular'), axios.get('/api/movies/latest'), axios.get('/api/tv/popular')])
                // set the states 
                setPopularMovies(popular.data)
                setLatestMovies(latest.data)
                setPopularShows(popularshow.data)
                setCarouselMovies(getRandomMovie(popular.data.results,3))
                setLoading(true)
            } catch(err) {
                //if it fails set our error var to true so it can redirect to user to an error page
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
        <>
            <HomeCarousel movies = {carouselMovies}/>
            <h1>Latest Movies</h1>
                <HomeSlider mediaType = "movie" mediaList = {latestMovies}/>
            <h1>Popular Movies</h1>
                <HomeSlider  mediaType = "movie" mediaList = {popularMovies} />
            <h1>Popular Shows</h1>
                <HomeSlider mediaType = 'tv' mediaList = {popularShows}/>
         
        </>
    );
}

export default Home;
