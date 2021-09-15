import React from 'react';

import Block from '../../molecules/Block'
import CardMember from '../../molecules/CardMember'

import 'bootstrap/dist/css/bootstrap.min.css'
import useFetch from '../../../hooks/useFetch'


const Member = () => {
const {peoples} = useFetch()
console.log(peoples)

    return (
        <Block className="block" title="Members" anchor="see all">
            <div className="card-content">
            {peoples.map((people)=>(
                <div>
                    <CardMember src="" subtitle="Organizers" member={people.name} total={4} key={people.name}/>
                </div>
            ))}
            jghdjksghbnj    
            </div>
        </Block>
    )
}

export default Member;