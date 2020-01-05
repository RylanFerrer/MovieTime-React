import React, {useEffect,useState} from 'react';
import ResultsDesktop from './ResultsDesktop'
import ResultsMobile from './ResultsMobile'
import axios from 'axios'
const SearchPage = () => {
    const [movieResults, setMovieResults] = useState(undefined)
    const [showResults, setShowResults] = useState(undefined)

    const changeFunction = async(event) => {
        if(event.target.value.length > 0)
        {
            const response = await axios.get(`/api/search`, { params:{searchVal:event.target.value}})
            setMovieResults(response.data.movies)
            setShowResults(response.data.shows)
        }

    }
    
    return (
        <div>
            <div>
                <input onChange = {event => changeFunction(event)}/>
            </div>
            <ResultsMobile movieResults = {movieResults} showResults = {showResults}/>
            <ResultsDesktop  movieResults = {movieResults} showResults = {showResults}/>
           
        </div>
    );
}

export default SearchPage;
