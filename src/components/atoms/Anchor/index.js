import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './_style.scss'

const Anchor = (props) => {
    const { classNames, children } = props
    const classProps = classnames(
        styles.anchor,
        classNames
    )
    return (
        <a className={classProps}>{children}</a>
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