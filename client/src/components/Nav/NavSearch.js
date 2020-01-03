import React, {useEffect, useState} from 'react';

const NavSearch = () => {
   const [search, setSearch] = useState('')
   const runFunction = async(event) => {
    setSearch(event.target.value)
   }
    return (
        <div>
            <input onChange = {(event) => runFunction(event)}  className = "nav__search"/>
        </div>
    );
}

export default NavSearch;
