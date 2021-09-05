import React, {Component} from 'react';
import{
    Container
} from 'react-bootstrap';
import './_about.scss';
import CardContent from '../Card-content/CardContent';

class NextMeet extends Component{

    render(){
        return(
            <div className="mt-5">
                <Container>
                <h2>About Meetup</h2>
                <p> Come and meet other developers interested in the Javascript and its library in the Greater Jakarta Area</p>
                <p>Twitter : @JakartaJS and we use the hashtag #jakartajs</p>
                </Container>
            </div>
        )
    }
}

export default NextMeet;