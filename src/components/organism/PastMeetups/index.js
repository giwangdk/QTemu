import React, { useState} from 'react';

import Block from '../../molecules/Block'
import Card from '../../atoms/Card'
import CardEvent from '../../molecules/CardEvent'

import 'bootstrap/dist/css/bootstrap.min.css'

const PastMeetup = () => {
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
    return (
        <Block className="block" title="Past Meetup" anchor="see all">
            <Card className="card">
            <div className="card-content p-4">
                    {events.map((event) => {
                        <CardEvent date={event.date} event={event.company} guest={event.people} key={ event.id}/>
                })}
                </div>
            </Card>
        </Block>
    )
}

export default PastMeetup;