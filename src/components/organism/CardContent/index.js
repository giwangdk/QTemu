import React from 'react';

import Block from '../../molecules/Block'
import Card from '../../atoms/Card'

import 'bootstrap/dist/css/bootstrap.min.css'

const CardContent = () => {
    return (
        <Block className="block" title="Next Meetup" anchor="see all">
            <Card className="card">
            <div className="card-content p-4">
                    <h5>Awesome meetup and event</h5>
                    <p className="text-muted">25 Januari 2019</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quam dolores necessitatibus nulla vitae quo obcaecati odit, minus sapiente in, sit similique non fuga assumenda molestiae voluptate provident quasi autem nihil eum, officiis sed ab? Minus, dolorum quia alias delectus expedita vero quam hic doloremque, nam, pariatur sint maxime tenetur?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ad!</p>
                    <p>See you there!</p>
                    <p>BEst, Hengki, Glovanni, Sofian, Riza, Agung The jakarta </p>
                </div>
            </Card>
        </Block>
    )
}

export default CardContent;