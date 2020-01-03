import React from 'react';
import {Link} from 'react-router-dom'
import Tilt from 'react-tilt'
import {posterPath} from "../../Helpers/helpervars"

const CastSliderContent = (props) => {
    const {character,name, image,id} = props
    return (
        <div>
          <Tilt options={{ max : 25 }}>
            <Link to = {`/actor/${id}`}>
              <img alt = {name} src = {`${posterPath}${image}`}/>
            </Link>
            <h4> {character}</h4>
              <h4>{name}</h4>  
          </Tilt>
        
        </div>
    );
}

export default CastSliderContent;
