import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => {
	return (
		<Link className='exercise-card' to={`/exercise/${exercise.id}`}>
			<img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
			<div className='exercise-detail'>
				<div className='targets'>
					<p>{exercise.bodyPart}</p>
					<p>{exercise.target}</p>
				</div>
				<p className='exercise-name'>{exercise.name}</p>
			</div>
		</Link>
	);
};

export default ExerciseCard;
