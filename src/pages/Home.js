import React, {Component} from 'react';
import Header from '../components/Header/Header.js';
import Meetup from '../components/Meetup/Meetup.js';
import NextMeet from '../components/NextMeet/NextMeet.js';
import About from '../components/About/About.js';
import Members from '../components/Members/Members.js';

class Home extends Component{
    render(){
        return(
            <div>
                
            <Header/>
            <Meetup/>
            <NextMeet/>
            <About/>
            <Members/>
            </div>
        )
    }
}

export default Home;