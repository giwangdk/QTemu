import React from 'react';

import Block from '../../molecules/Block'

import 'bootstrap/dist/css/bootstrap.min.css'

const About = () => {
    return (
        <Block className="block" title="About Meetup" anchor="see all">
            <div className="card-content">
                <p> Come and meet other developers interested in the Javascript and its library in the Greater Jakarta Area</p>
                <p>Twitter : @JakartaJS and we use the hashtag #jakartajs</p>
            </div>
        </Block>
    )
}

export default About;