import React from 'react';
import Card from './Card.js';
const CardList = ({ Information }) =>
{
            const CardArray=Information.map((user, i)=>{
               return <
               Card key={i} 
               name={Information[i].name}
                language={Information[i].language}
               link={Information[i].link}
               logolink={Information[i].logolink}
               />
               })

    return(<div> {CardArray} </div>);

}

export default CardList;