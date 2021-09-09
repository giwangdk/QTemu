import React, {Component} from 'react';
import{
    Container
} from 'react-bootstrap';
import CardContent from '../Card-content/CardContent';

class NextMeet extends Component{

    render(){
        return(
            <div>
                <Container>
                <h2>Next Meetup</h2>
                <CardContent/>
                </Container>
                
            </div>
        )
    }
}

export default NextMeet;