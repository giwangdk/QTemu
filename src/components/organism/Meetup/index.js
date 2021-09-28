
import React from 'react';

import Block from '../../molecules/Block'
import Card from '../../atoms/Card'
import Button from '../../atoms/Button'

import 'bootstrap/dist/css/bootstrap.min.css'


import styles from './style.module.scss';

const Meetup = () => {
    return (
        <Card className="card">
            <div className="card-content">
            <div className="hero-meetup my-5 p-4">
                    <div className="row">
                        <div className="col-3 mr-3">
                            <div className="meetup-image">
                                
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="meeting-description">
                                <h3>Hacktiv 8 Meetup</h3>
                                <table >
                                    <tr>
                                        <th>Location</th>
                                        <td></td>
                                        <td>Jakarta</td>
                                    </tr>
                                    <tr>
                                        <th>Members</th>
                                        <td></td>
                                        <td>1078</td>
                                    </tr>
                                    <tr>
                                        <th>Organizers</th>
                                        <td></td>
                                        <td>Adhy Wiranata</td>
                                    </tr>
                                </table>
                                <Button className="outline outline-yellow rounded p-2 mt-3">Join Us</Button>
                            </div>
                        </div>
                    </div>
                </div>
                
                </div>
        </Card>
    )
}

export default Meetup;