/* @flow */
import * as React from 'react'
import Anchor from '../../atoms/Anchor'
import Brand from '../../atoms/Brand'

import 'bootstrap/dist/css/bootstrap.min.css'


const Nav = () => (
	<nav class="navbar navbar-expand-lg">
	<Brand className="brand">Qtemu</Brand>
		<ul class="navbar-nav">
		<li class="nav-item active">
			<Anchor class="nav-link anchor" >Home</Anchor>
		</li>
		<li class="nav-item">
			<Anchor class="nav-link anchor">Features</Anchor>
		</li>
		</ul>
	</nav>
)

export default Nav
