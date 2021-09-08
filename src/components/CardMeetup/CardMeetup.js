import React, {Component} from 'react';
import{
    Row,
    Col,
    Card
} from 'react-bootstrap';
import './_cardmeetup.scss';

const CardMeetup = ({events})=>{
        return(
            <div>
                <Row>
                {events.map((event)=>(
                        <Col lg={4} md={6} key={event.id}>
                        <Card style={{ width: '18rem' }} className="card">
                            <Card.Body>
                                <Card.Title>{event.date}</Card.Title>
                                <hr />
                                <Card.Text>
                                #{event.id}  {event.company}
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">{event.people} went</Card.Subtitle>
                                <div className="btn">View More</div>
                            </Card.Body>
                        </Card>
                    
                        </Col>
                ))}
                    </Row>

                
            </div>
        )
    }


export default CardMeetup;