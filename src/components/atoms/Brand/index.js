import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './_styles.scss'

const Brand = (props) => {
    const { classNames, children } = props
    return (
        <a className={classnames(styles.brand, classNames)}>{children}</a>
    )
}

Brand.propTypes = {
    classNames : PropTypes.string,
    children : PropTypes.string
}

Brand.defaultProps = {
    classNames :'',
    children : ''
}

export default Brand;