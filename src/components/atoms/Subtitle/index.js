import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './_styles.scss'

const SubTitle = (props) => {
    const { classNames, children } = props
    return (
        <h2 className={classnames(styles.subtitle, classNames)}>{children}</h2>
    )
}

SubTitle.propTypes = {
    classNames : PropTypes.string,
    children : PropTypes.string
}

SubTitle.defaultProps = {
    classNames :'',
    children : ''
}

export default SubTitle;