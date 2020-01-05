import React from 'react'
import Tilt from 'react-tilt'
import {mobilePoster} from '../Helpers/helpervars'
import {Link} from 'react-router-dom'
export default function ResultsMobile(props) {
    const {movieResults, showResults} = props
    return (
        <div className = "search__results-mobile">
            <h1>Mobile</h1>
            {
                 movieResults !== undefined ? movieResults.results.map((movie,index) => {
                     return (
                         <div>
                         <img width = "120px" src = {`${mobilePoster}${movie.poster_path}`}
                         />
                         <div>
                         <h4>{movie.original_title}</h4>
                         <h5>{movie.overview}</h5>
                         </div>
                      
                         </div>
                        
                         )
                 }) : ""
            }
        </div>
    )
}
