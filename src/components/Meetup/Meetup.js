import React, {Component} from 'react';
import{
    Container
} from 'react-bootstrap';

class Meetup extends Component{

    render(){
        return(
            <div>
                <Container>
                <div className="hero-meetup my-5 p-4">
                    <div className="row">
                        <div className="col-3 mr-3">
                            <div className="meetup-image">
                                
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="meeting-description">
                                <h3>Hacktiv 8 Meetup</h3>
                                <table >
                                    <tr>
                                        <th>Location</th>
                                        <td></td>
                                        <td>Jakarta</td>
                                    </tr>
                                    <tr>
                                        <th>Members</th>
                                        <td></td>
                                        <td>1078</td>
                                    </tr>
                                    <tr>
                                        <th>Organizers</th>
                                        <td></td>
                                        <td>Adhy Wiranata</td>
                                    </tr>
                                </table>
                                <div className="btn  btn-join"> Join Us</div>
                            </div>
                        </div>
                    </div>
                </div>
                </Container>
        </div>
        )
    }
}

export default Meetup;