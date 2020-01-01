import React from 'react';
import {posterPath} from "../Helpers/helpervars"

const CastSliderContent = (props) => {
    const {characterName,name, image} = props
    return (
        <div>
          <img src = {`${posterPath}${image}`}/>
          <h4> {characterName}</h4>
          <h4>{name}</h4>  
        </div>
    );
}

export default CastSliderContent;
