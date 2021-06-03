import React from 'react';
import {Information} from './Information';
import CardList from './CardList';
import Search from './Search';
class Main extends React.Component
{
    constructor() 
    {
        super()
        this.state=
        {
            Information: Information,
            searchfield: ''
        }
    }

    onsearchchange=(event)=>{
        this.setState({searchfield:event.target.value})
    }

    render()
    {
    const FilterCards=this.state.Information.filter(Information =>{
    return Information.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

        return(
        <div>
            <div className='Head'>
            <Search searchchange={this.onsearchchange}/>
            </div>
            <div className='MyDIV'>
                
            </div>
            <CardList  Information={FilterCards}/>
        </div>
        );
    }
}

export default Main;