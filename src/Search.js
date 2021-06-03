import React from 'react';
const Search = ({searchfield,searchchange}) =>
{
    return(
        <div className='Head'>
             <input className='INPUT'
              type='search' placeholder="Search"
              onChange={searchchange}/>
        </div>
    );
}
export default Search;