import React from 'react';
import Tilt from 'react-tilt'
import {posterPath} from '../../Helpers/helpervars'
import {Link} from "react-router-dom"
const HomeSliderContent = (props) => {
    const {media, mediaType} = props
    return (
        <div>
            <Tilt className="tilt-media" options={{ max : 25 }}  >
            <Link  className = "link" to = {`/${mediaType}/${media.id}`}>
                <img alt = {media.original_title} src = {`${posterPath}${media.poster_path}`}/>
            </Link>  
            </Tilt>
            <h5 className = "poster-title">{mediaType === "movie" ? media.original_title : media.original_name}</h5>
        </div>
    );
}

export default HomeSliderContent;
