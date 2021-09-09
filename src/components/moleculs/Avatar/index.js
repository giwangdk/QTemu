import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './_style.scss';
import 


const Avatar = (props) => {
    const { classNames, children } = props;
    return (
        <div className={classnames(styles.avatar, classNames)}>
        
        </div>
    )
}

Avatar.propTypes = {
    classNames: PropTypes.string,
}

export default Avatar