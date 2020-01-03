import React, {useEffect,useState} from 'react';
import Tilt from 'react-tilt'
import {posterPath} from '../Helpers/helpervars'
import {Link} from 'react-router-dom'
import axios from 'axios'
const SearchPage = () => {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState(undefined)
    const changeFunction = async(event) => {
        setSearch(event.target.value)
        if(event.target.value.length > 0)
        {
            const response = await axios.get(`/api/search`, { params:{searchVal:event.target.value}})
            setResults(response.data)
        }

    }
    
    console.log(results)
    return (
        <div>
            <div>
                <input onChange = {event => changeFunction(event)}/>
            </div>
            <div>
            {
                results !== undefined ? results.results.map((item,index) => {
                if(item.poster_path)
                {
                    return( 
                    <Tilt key =  {index} className="tilt-media" options={{ max : 25 }}>
                        <Link to = {`/movie/${item.id}`}>
                            <img width = "185px" height = "278px" alt = {item.original_title}src = {`${posterPath}${item.poster_path}`}/>
                        </Link>
                    </Tilt>
                    )
                }
                return false
                }): ''
            }
            </div>
           
        </div>
    );
}

export default SearchPage;
