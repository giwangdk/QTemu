import React, {Component} from 'react';
import{
    Container
} from 'react-bootstrap';
import CardMember from '../CardMember/CardMember';

class Members extends Component{

    render(){
        return(
            <div className="mt-5">
                <Container>
                <div className="section-title d-flex">
                <h2>Members</h2>
                <a className="ml-auto">See All</a>
                </div>
                <CardMember/>
                </Container>
        </div>
        )
    }
}

export default Members;