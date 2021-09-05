import React, {Component} from 'react';
import{
    Row,
    Col,
    Card
} from 'react-bootstrap';
import './_cardmeetup.scss';



class CardMeetup extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const events= [
            {
                id:36,
                date : "27 November 2017",
                company:"Kumparan",
                people:139
            },
            {
                id:38,
                date : "27 October 2017",
                company:"BliBli",
                people:113
            },
            {
                id:37,
                date : "27 November 2017",
                company:"Hacktiv8",
                people:110
            },
        ];

        const listItems = events.map((event)=>
            <Col lg={4} md={6} key={event.id}>
            <Card style={{ width: '18rem' }} className="card">
                <Card.Body>
                    <Card.Title>{event.date}</Card.Title>
                    <hr />
                    <Card.Text>
                    #{event.id} JakartaJS April Meetup with {event.company}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">{event.people} went</Card.Subtitle>
                    <div className="btn">View More</div>
                </Card.Body>
            </Card>
        
            </Col>
        
        )
        return(
            <div>
                <Row>
                    {listItems}
                    </Row>

                
            </div>
        )
    }
}

export default CardMeetup;