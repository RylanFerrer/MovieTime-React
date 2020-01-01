import React from 'react';
import {Link} from 'react-router-dom'
import {posterPath} from "../Helpers/helpervars"

const CastSliderContent = (props) => {
    const {character,name, image,id} = props
    return (
        <div>
          <Link to = {`/actor/${id}`}>
            <img alt = {name} src = {`${posterPath}${image}`}/>
            <h4> {character}</h4>
            <h4>{name}</h4>  
          </Link>
        </div>
    );
}

export default CastSliderContent;
