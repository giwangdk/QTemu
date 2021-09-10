import React from 'react';

import Block from '../../molecules/Block'
import Card from '../../atoms/Card'
import CardMember from '../../molecules/CardMember'

import 'bootstrap/dist/css/bootstrap.min.css'

const Member = () => {
    return (
        <Block className="block" title="Members" anchor="see all">
            <div className="card-content p-4">
                    <CardMember src="" subtitle="Organizers" member="Adhy Wiranata" total={4}/>
                </div>
        </Block>
    )
}

export default Member;