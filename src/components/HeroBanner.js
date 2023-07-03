import React from 'react';
import Banner from '../assets/images/banner.png';
const HeroBanner = () => {
	return (
		<div className='hero-wrapper'>
			<div className='text-wrapper'>
				<h1>
					Best Exercises<span> For YOU!</span>
				</h1>
				<p className='sentence'>
					Sweat, Smile <span>and Repeat</span>
				</p>
				<p className='checkOut'>Check out the most effective exercises!</p>
				<button className='exercises-btn' href='#exercises'>Explore Exercises</button>
			</div>
			<p className='backgroundText'>Exercise</p>
			<div className='heroBannerImg'>
				<img src={Banner} alt='Banner' />
			</div>
		</div>
	);
};

export default HeroBanner;
