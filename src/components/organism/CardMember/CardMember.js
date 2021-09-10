import React, {Component} from 'react';
import{
    Row,
    Col
} from 'react-bootstrap';

class CardMember extends Component{

    render(){
        return(
            <div className="card-member p-3">
                <Row>
                    <Col lg={2}>
                        <div className="card-image"></div>
                    </Col>
                    <Col lg={8} className="d-flex flex-column justify-content-center">
                    <h5>Organizers</h5>
                    <p>Adhy Wiranata</p>
                    </Col>
                </Row>
        </div>
        )
    }
}

export default CardMember;

