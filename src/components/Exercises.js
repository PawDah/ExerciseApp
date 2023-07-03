import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';

function Exercises({ exercises, setExercises, bodyPart }) {
	const [currentPage, setCurrentPage] = useState(1);
	const exercisesPerPage = 9;
	const indexOfLastExercise = currentPage * exercisesPerPage;
	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
	const currentExercises = exercises.slice(
		indexOfFirstExercise,
		indexOfLastExercise
	);
	const paginate = (event) => {
		setCurrentPage(event.selected + 1);
	};
	const scroll = () => {
		document.getElementById('exercises').scrollIntoView({ behavior: 'smooth' });
	};
	useEffect(() => {
		const fetchExercisesData = async () => {
			let exercisesData = [];

			if (bodyPart === 'all') {
				exercisesData = await fetchData(
					'https://exercisedb.p.rapidapi.com/exercises',
					exerciseOptions
				);
			} else {
				exercisesData = await fetchData(
					`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
					exerciseOptions
				);
			}
			setExercises(exercisesData);
		};
		fetchExercisesData();
	}, [bodyPart]);
	return (
		<div className='exercises-wrapper' id='exercises'>
			<h3>Showing Results</h3>
			<div className='exercises'>
				{currentExercises.map((exercise, index) => (
					<ExerciseCard key={index} exercise={exercise} />
				))}
			</div>
			<div className='pagination-wrapper'>
				{exercises.length > 9 && (
					<ReactPaginate
						onClick={scroll}
						className='pagination'
						nextLabel='-- >'
						previousLabel='< --'
						initialPage={0}
						pageRangeDisplayed={2}
						marginPagesDisplayed={1}
						pageCount={Math.ceil(exercises.length / exercisesPerPage)}
						onPageChange={paginate}
					/>
				)}
			</div>
		</div>
	);
}

export default Exercises;
