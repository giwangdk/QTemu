import React from 'react';

import Block from '../../molecules/Block'
import Card from '../../atoms/Card'
import Subtitle from '../../atoms/Subtitle'
import Date from '../../atoms/Date'

import 'bootstrap/dist/css/bootstrap.min.css'

const NextMeetup = () => {
    return (
        <Block className="block" title="About Meetup" anchor="see all">
            <Card className="card">
                <div className="card-content p-4">
                <Subtitle className="subtitle">Awesome meetup and Event</Subtitle>
                <Date>25 January 2019</Date>
                    <p>Hello, javascript & Node.js Ninjas</p>
                    <p>Get Ready for our monthlu meetup JakartaJS! this will be our fifth meetup of 2018</p>
                    <p>The meetup format will contain some short stories and technical talks</p>
                    <p>If you ave a short announcement you'd like to share with the audience, you may do so during ope mic announcements</p>
                    <p>Remember to bring a photo ID to get through building security</p>
                    <p>.....</p>
                    <p>See you there!</p>
                    <p>Best, Hengki, Giovanni, Sofian, Riza AgungThe JakartaJS Oragnizers</p>
            </div>
            </Card>
        </Block>
    )
}

export default NextMeetup;