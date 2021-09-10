import React from 'react'
import PropTypes from 'prop-types'


import 'bootstrap/dist/css/bootstrap.min.css'

import Card from '../../atoms/Card'
import Date from '../../atoms/Date'
import Button from '../../atoms/Button'


const CardEvent = (props) => {
    const { date, event, guest } = props
    return (
        <Card className="card">
            <div className="card-header">
                <Date>{ date}</Date>
            </div>
            <hr />
            <div className="card-body">
                <p>{event}</p>
                <p>{guest} went</p>
                <Button className="button button-yellow small">view</Button>
            </div>
        </Card>
    )
}

CardEvent.propTypes = {
    children: PropTypes.string,
    date: PropTypes.string,
    event: PropTypes.string,
    guets: PropTypes.string
}

CardEvent.defaultProps = {
    children : '',
    date:  '',
    event: '',
    guets: ''
}

export default CardEvent