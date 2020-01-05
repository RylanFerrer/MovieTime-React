import React from 'react'
import {mobilePoster} from '../Helpers/helpervars'
import {Link} from "react-router-dom"
export default function ResultsMobile(props) {
    const {movieResults,showResults} = props
    return (
        <div className = "search__results-mobile">
            <h1>Movies</h1>
            {
                 movieResults !== undefined ? movieResults.results.map((movie,index) => {
                     if(movie.poster_path)
                     return (
                         <div className ="search__results-mobile-media">
                         <div key ={index}>
                            <img className = "search__results-mobile-media-poster" alt = {movie.original_title} width = "120px" src = {`${mobilePoster}${movie.poster_path}`}  />
                            <Link to = {`/movie/${movie.id}`}><button className = "search__results-mobile-media-button">View More</button></Link>
                         </div>
                         <div>
                         <h4>{movie.original_title}</h4>
                         <h5>{movie.overview}</h5>
                         </div>
                      
                         </div>
                         )
                    return false
                 }) : ""
            }
            <h1>Shows</h1>
            {
                showResults !== undefined ? showResults.results.map((show,index) => {
                    if(show.poster_path)
                    return (
                        <div  key ={index} className ="search__results-mobile-media">
                            <div>
                                <img className = "search__results-mobile-media-poster" alt = {show.original_name} width = "120px" src = {`${mobilePoster}${show.poster_path}`}  />
                                <Link to = {`/tv/${show.id}`}><button className = "search__results-mobile-media-button">View More</button></Link>
                            </div>
                            <div> 
                                <h4>{show.original_name}</h4>
                                <h5>{show.overview}</h5>

                            </div>
          
                        </div>
                    )

                    return false
                }) : ""
            }
        </div>
    )
}
