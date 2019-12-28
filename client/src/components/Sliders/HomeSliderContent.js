import React from 'react';
import {posterPath} from '../Helpers/helpervars'
import {Link} from "react-router-dom"
const HomeSliderContent = (props) => {
    const {media, mediaType} = props
    return (
        <div>
            <Link  className = "link" to = {`/${mediaType}/${media.id}`}>
                <img alt = {media.original_title} src = {`${posterPath}${media.poster_path}`}/>
            </Link>  
        </div>
    );
}

export default HomeSliderContent;
