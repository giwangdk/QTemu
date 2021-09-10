/* @flow */
import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Anchor from '../../atoms/Anchor'
import Brand from '../../atoms/Brand'

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './_style.scss'


const Nav = (props) => (
  <div className={classnames(styles.card, props.className)}>{props.children}</div>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<Brand className=".brand nav-brand">Qtemu</Brand>
		<ul class="navbar-nav">
		<li class="nav-item active">
			<Anchor class="nav-link" >Home</Anchor>
		</li>
		<li class="nav-item">
			<Anchor class="nav-link">Features</Anchor>
		</li>
		</ul>
	</nav>
)

Nav.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}


Nav.defaultProps = {
    className: '',
    children: '',
}

export default Nav
