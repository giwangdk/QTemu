import React, {Component} from 'react';
import Header from '../components/Header/Header.js';
import Meetup from '../components/Meetup/Meetup.js';

class Home extends Component{
    render(){
        return(
            <div>
                
            <Header/>
            <Meetup/>

            </div>
        )
    }
}

export default Home;