import React from 'react';
import HomeSliderContent from './HomeSliderContent'
import {sliderSettings} from '../Helpers/helpervars'

import Slider from "react-slick";
const HomeSlider = (props) => {
    // Destructure props 
    const {mediaList, mediaType} = props
    return (
        <Slider className = "home__slider"{...sliderSettings}>
        {
            mediaList.results.map((media,index) => {
            return (
                <HomeSliderContent media = {media} mediaType = {mediaType} key = {index}/>
                ) 
            })
        }
      </Slider>
    );
}

export default HomeSlider;
