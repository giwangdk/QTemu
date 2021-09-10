import React from 'react';

import Block from '../../molecules/Block'
import Card from '../../atoms/Card'

import 'bootstrap/dist/css/bootstrap.min.css'

const CardContent = () => {
    return (
        <Block className="block" title="About Meetup" anchor="see all">
            <Card className="card">
            <div className="card-content p-4">
            <h2>About Meetup</h2>
                <p> Come and meet other developers interested in the Javascript and its library in the Greater Jakarta Area</p>
                <p>Twitter : @JakartaJS and we use the hashtag #jakartajs</p>
            </div>
            </Card>
        </Block>
    )
}

export default CardContent;