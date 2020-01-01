import React from 'react';
import CastSlider from './Sliders/CastSlider'
const Cast = (props) => {
   const {cast} = props
    return (
        <div>
            <h1>Cast</h1>
            <CastSlider cast = {cast}/>
          
        </div>
    );
}

export default Cast;
