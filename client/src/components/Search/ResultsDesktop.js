import React from 'react'
import Tilt from 'react-tilt'
import {posterPath} from '../Helpers/helpervars'
import {Link} from 'react-router-dom'
export default function ResultsDesktop(props) {
   const {movieResults, showResults} = props
    return (
        <div className = "search__results-desktop">
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
    
    )
}
