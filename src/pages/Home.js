import React, { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
const Home = () => {
	const [bodyPart, setBodyPart] = useState('all');
	const [exercises, setExercises] = useState([]);
	
	return (
		<div className='home-wrapper'>
			<HeroBanner />
			<SearchExercises
				setExercises={setExercises}
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
			/>
			<Exercises
				setExercises={setExercises}
				bodyPart={bodyPart}
				exercises={exercises}
			/>
		</div>
	);
};

export default Home;
