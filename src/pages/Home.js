import React, {Component} from 'react';
import Header from '../components/Header/Header.js';
import Meetup from '../components/Meetup/Meetup.js';
import NextMeet from '../components/NextMeet/NextMeet.js';

class Home extends Component{
    render(){
        return(
            <div>
                
            <Header/>
            <Meetup/>
            <NextMeet/>
            </div>
        )
    }
}

export default Home;