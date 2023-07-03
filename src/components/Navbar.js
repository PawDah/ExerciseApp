import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
	return (
		<nav className='navigation'>
			<Link className='link' to={'/'}>
				<img src={Logo} alt='logo'></img>
			</Link>
			<div className='links'>
				<Link className='homePage' to={'/'}>
					Home
				</Link>
				<a href='#exercises'>Exercises</a>
			</div>
		</nav>
	);
};

export default Navbar;
