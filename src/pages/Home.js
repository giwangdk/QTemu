import React, {Component} from 'react';
import Header from '../components/Header/Header.js';
import Meetup from '../components/Meetup/Meetup.js';
import NextMeet from '../components/NextMeet/NextMeet.js';
import About from '../components/About/About.js';
import Members from '../components/Members/Members.js';
import PastMeetups from '../components/PastMeetups/PastMeetups.js';
import Footer from '../components/Footer/Footer.js';

class Home extends Component{
    render(){
        return(
            <div>
                
            <Header/>
            <Meetup/>
            <NextMeet/>
            <About/>
            <Members/>
            <PastMeetups/>
            <Footer/>

            </div>
        )
    }
}

export default Home;