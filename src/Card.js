import React from 'react';
//import {Csharp} from  './Images/clipart2963807.png';// Csharp Logo
//import Cplus from './Images/pngegg.png';// Cplus Logo
//import Javascript from './Images/kisspng-javascript-programming-language-ajax-5b0b285b9846b7.8510968715274578836237.png';// Java Script Logo
//import Php from './Images/kisspng-web-development-php-logo-mobile-app-development-5b00d87216af63.7242456715267820660929.png';// php Logo
//import python from './Images/kisspng-python-programming-language-computer-programming-c-hanuman-png-transparent-images-free-download-clip-5b814ed35d07d0.8307633215352009793811.png';//python logo
import './My.css';
const Card=(props)=>
{
    return(
         <div className=' Card dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
         <img src={props.logolink} className='Image' alt='C#'/>
           <div className='Detail tc'>
             <h1>{props.name}</h1>
             <p >{props.language}</p>
             <a  href={props.link}>Grab Now</a>
           </div>
        </div>
    );
}
export default Card;