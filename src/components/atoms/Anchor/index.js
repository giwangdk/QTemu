import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'


const Anchor = (props) => {
    const { classNames, children } = props
    return (
        <a className={classnames( classNames)}>{children}</a>
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