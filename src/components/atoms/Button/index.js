import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './_style.scss';

export const ButtonType = {
    BUTTON: 'button',
    OUTLINE: 'outline',
    SOFT: 'soft',
    GHOST: 'ghost',
    LINK : 'link'

}

export const ButtonTheme = {
    DEFAULT: 'default',
    ROUNDED: 'rounded',
    PILL : 'pill'
}

export const ButtonVariant = {
    PRIMARY: 'primary',
    Secondary: 'secondary',
    DANGER: 'danger',
    WARNING: 'warning',
    INFO : 'info'
}

export const ButtonSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
  }


const Button = (props) => {
    const { type, theme, variant, size, children, className, disabled, onClick } = props
    const classProps = classnames(
        styles.button,
        styles[type],
        styles[theme],
        styles[variant],
        styles[size],
        {
            [styles.disabled] :disabled
        },
        className
    )

    return (
        <button onClick={onClick} disabled={disabled} className={classProps}>
            {children}
        </button>
    )
}



Button.propTypes = {
    type: PropTypes.string,
    theme: PropTypes.string,
    variant: PropTypes.string,
    size: PropTypes.string,
    onClick:PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled:PropTypes.bool
}

Button.defaultProps = {
    type: ButtonType.BUTTON,
    theme: ButtonTheme.DEFAULT,
    variant: ButtonVariant.PRIMARY,
    size: ButtonSize.MEDIUM,
    onClick: () => { },
    className: '',
    disabled: false
}

export default Button;