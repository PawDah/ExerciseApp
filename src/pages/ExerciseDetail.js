import React, { useEffect } from 'react';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
	useEffect(() => {
		window.scrollTo({ top: -10, left: 0, behavior: 'smooth' });
	}, []);
	return (
		<div>
			<Detail />
			<SimilarExercises />
		</div>
	);
};

export default ExerciseDetail;
