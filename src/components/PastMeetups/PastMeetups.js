import React, {Component} from 'react';
import{
    Container
} from 'react-bootstrap';
import './_pastmeetups.scss';
import CardMeetup from '../CardMeetup/CardMeetup';

class PastMeetups extends Component{

    render(){
        return(
            <div>
                <Container>
                <div className="section-title d-flex mt-5">
                <h2>Past Meetups</h2>
                <a className="ml-auto">See All</a>
                </div>
                <CardMeetup/>
                </Container>
                
            </div>
        )
    }
}

export default PastMeetups;