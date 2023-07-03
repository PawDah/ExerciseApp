import React from 'react';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart }) => {
	return (
		<div className='body-part'>
			<button
				onClick={() => {
					setBodyPart(item);
					window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
				}}>
				<img src={Icon} alt='dumbbell' className='body-part-icon' />
				<p className='item-name'>{item}</p>
			</button>
		</div>
	);
};

export default BodyPart;
