/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './style.css'


const Card = (props) => (
  <div className={classnames(styles.card, props.className)}>{props.children}</div>
)

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}


Card.defaultProps = {
    className: '',
    children: '',
}

export default Card
