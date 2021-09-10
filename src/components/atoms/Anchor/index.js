import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './_styles.scss'

const Anchor = (props) => {
    const { classNames, children } = props
    return (
        <a className={classnames(styles.anchor, classNames)}>{children}</a>
    )
}

Anchor.propTypes = {
    classNames : PropTypes.string,
    children : PropTypes.string
}

Anchor.defaultProps = {
    classNames :'',
    children : ''
}

export default Anchor;