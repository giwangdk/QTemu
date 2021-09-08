import React, {useState} from 'react';
import{
    Container
} from 'react-bootstrap';
import './_pastmeetups.scss';
import CardMeetup from '../CardMeetup/CardMeetup';

const PastMeetups = () => {
    const [events, setEvent] = useState([
        {
            id: 36,
            date: "27 November 2017",
            company: "JakartaJS April Meetup with Kumparan",
            people: 139
        },
        {
            id: 36,
            date: "27 November 2017",
            company: "JakartaJS April Meetup with Kumparan",
            people: 139
        },
        {
            id: 36,
            date: "27 November 2017",
            company: "JakartaJS April Meetup with Kumparan",
            people: 139
        }
    ]
    );


        return(
            <div>
                <Container>
                <div className="section-title d-flex mt-5">
                <h2>Past Meetups</h2>
                <a className="ml-auto">See All</a>
                </div>
                <CardMeetup events={events} />
                </Container>
                
            </div>
        )
    }

export default PastMeetups;