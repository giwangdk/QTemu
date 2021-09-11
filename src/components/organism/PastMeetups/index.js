import React, { useState} from 'react';

import Block from '../../molecules/Block'
import Card from '../../atoms/Card'
import CardEvent from '../../molecules/CardEvent'

import 'bootstrap/dist/css/bootstrap.min.css'

const PastMeetup = () => {
    const [events] = useState([
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
    return (
        <Block className="block" title="Past Meetup" anchor="see all">
            <div className="card-content">
                <div className="row">
                {events.map((event) => (
                    <div className="col-lg-4 col-md-12 mt-3">
                        <CardEvent date={event.date} event={event.company} guest={event.people} key={ event.id}/>
                        </div>
            ))}
                </div>
                    
                </div>
        </Block>
    )
}

export default PastMeetup;