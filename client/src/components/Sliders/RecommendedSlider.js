import React from 'react';
import HomeSliderContent from './Slider Content/HomeSliderContent'
import Slider from 'react-slick'
import {sliderSettings} from '../Helpers/helpervars'
const RecommendedSlider = (props) => {
    const {mediaList, mediaType} = props
    console.log(mediaList)
    return (
        <Slider className = "home__slider"{...sliderSettings}>
        {
            mediaList.results.map((media,index) => {
            return (
                <HomeSliderContent  media = {media} mediaType = {mediaType} key = {index}/>
                ) 
            })
        }
      </Slider>

    );
}

export default RecommendedSlider;
