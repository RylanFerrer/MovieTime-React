import React from 'react';
import CastSliderContent from './CastSliderContent'
import Slider from  "react-slick"
import {sliderSettings} from '../Helpers/helpervars'
const CastSlider = (props) => {
    const {cast} = props
    return (
        <Slider className = "home__slider"{...sliderSettings}>
            {cast.cast.map((actor,index) => {
                if(actor.profile_path)
                {
                return <CastSliderContent key = {index} name = {actor.name} character = {actor.character} image = {actor.profile_path} id = {actor.id}/>
                } 
                return false
            })}
        </Slider>
    );
}

export default CastSlider;
