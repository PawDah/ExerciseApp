import React from 'react';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
	return (
		<button
			onClick={() => {
				let slider = document.getElementById('scrollbar');
				slider.scrollLeft = slider.scrollLeft - 500;
			}}
			className='left-arrow'>
			<img src={LeftArrowIcon} alt='left-arrow' />
		</button>
	);
};

const RightArrow = () => {
	return (
		<button
			onClick={() => {
				let slider = document.getElementById('scrollbar');

				slider.scrollLeft = slider.scrollLeft + 500;
			}}
			className='right-arrow'>
			<img src={RightArrowIcon} alt='right-arrow' />
		</button>
	);
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
	return (
		<div className='scrollbar-wrapper'>
			<LeftArrow />
			<div id='scrollbar' className='scrollbar'>
				{data.map((item) => (
					<div
						className='single-item'
						key={item.id || item}
						itemID={item.id || item}
						title={item.id || item}>
						{isBodyParts ? (
							<BodyPart
								item={item}
								bodyPart={bodyPart}
								setBodyPart={setBodyPart}
							/>
						) : (
							<ExerciseCard exercise={item} />
						)}
					</div>
				))}
			</div>
			<RightArrow />
		</div>
	);
};

export default HorizontalScrollbar;
