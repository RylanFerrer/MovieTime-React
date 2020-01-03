import React, {useEffect,useState} from 'react';
import Tilt from 'react-tilt'
import {posterPath} from '../Helpers/helpervars'
import {Link} from 'react-router-dom'
import axios from 'axios'
const SearchPage = () => {
    const [movieResults, setMovieResults] = useState(undefined)
    const [showResults, setShowResults] = useState(undefined)

    const changeFunction = async(event) => {
        if(event.target.value.length > 0)
        {
            const response = await axios.get(`/api/search`, { params:{searchVal:event.target.value}})
            setMovieResults(response.data.movies)
            setShowResults(response.data.shows)
        }

    }
    
    return (
        <div>
            <div>
                <input onChange = {event => changeFunction(event)}/>
            </div>
            <div>
            <h2>Movies</h2>
            {
                movieResults !== undefined ? movieResults.results.map((item,index) => {
                if(item.poster_path)
                {
                    return( 
                    <Tilt key =  {index} className="tilt-media" options={{ max : 25 }}>
                        <Link to = {`/movie/${item.id}`}>
                            <img width = "185px" height = "278px" alt = {item.original_title}src = {`${posterPath}${item.poster_path}`}/>
                        </Link>
                    </Tilt>
                    )
                }
                return false
                }): ''
            }
            </div>
            <div>
                <h2>Shows</h2>
                {
                    showResults !== undefined ? 
                    showResults.results.map((show,index) => {
                        if(show.poster_path) {
                        return ( 
                        <Tilt key =  {index} className="tilt-media" options={{ max : 25 }}>
                            <Link to = {`/tv/${show.id}`}>
                                 <img width = "185px" height = "278px" alt = {show.original_name}src = {`${posterPath}${show.poster_path}`}/>
                            </Link>
                         </Tilt>
                         )
                        } 
                        return false
                    }) : ''
                }
            </div>
           
        </div>
    );
}

export default SearchPage;
