import React from 'react';
import {Link} from 'react-router-dom'
import {backdropPath} from '../Helpers/helpervars'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const HomeCarousel = (props) => {
    const {movies} = props
    console.log(movies)
    if(movies.length > 0 )
    {
    return (
        <div>
            <Carousel showThumbs={false} >
                {movies.map((movie,index) => {
                    return (
                        <div key = {index} className = "movie-page__header">
                        <img className = "movie-page__header-img" alt = {movie.original_title} src = {`${backdropPath}${movie.backdrop_path}`}/>
                            <div className = "movie-page__header-overlay">
                                <div className = "movie-page__header-overlay-content">
                                    <h2 className = "movie-page__header-overlay-content-title">{movie.original_title}</h2>
                                   <Link to = {`/movie/${movie.id}`}><button className = "movie-page__button">View More</button></Link> 
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    );
}
}

export default HomeCarousel;
