/* @flow */
import * as React from 'react'
import Anchor from '../../atoms/Anchor'
import Brand from '../../atoms/Brand'
import Button from '../../atoms/Button'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'

const Nav = () => (
	<nav class="navbar fixed-top ">
		<div className="container">
			<Brand className="brand">Qtemu</Brand>
			<ul class="navbar-nav d-flex flex-row justify-content-between">
			<li class="nav-item active ml-5">
				<Anchor class=" anchor" >Create Meetup</Anchor>
			</li>
			<li class="nav-item ml-4">
				<Anchor class=" anchor">Explore</Anchor>
			</li>
			</ul>
			<div className="ml-auto">
				<Button className="button button-yellow pill px-3 small">Login</Button>
			</div>
	</div>
	</nav>
)

export default Nav
