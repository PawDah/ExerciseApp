import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';

import HorizontalScrollbar from './HorizontalScrollbar';
function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
	const [search, setSearch] = useState('');
	const [bodyParts, setBodyParts] = useState([]);
	useEffect(() => {
		const fetchExercisesData = async () => {
			const bodyPartsData = await fetchData(
				'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
				exerciseOptions
			);
			setBodyParts(['all', ...bodyPartsData]);
		};
		fetchExercisesData();
	}, []);

	const handleSearch = async () => {
		if (search) {
			const exercisesData = await fetchData(
				'https://exercisedb.p.rapidapi.com/exercises',
				exerciseOptions
			);
			const searchedExercises = exercisesData.filter(
				(exercise) =>
					exercise.name.toLowerCase().includes(search) ||
					exercise.target.toLowerCase().includes(search) ||
					exercise.equipment.toLowerCase().includes(search) ||
					exercise.bodyPart.toLowerCase().includes(search)
			);
			setSearch('');
			setExercises(searchedExercises);
		}
	};

	return (
		<div className='search-wrapper'>
			<h2>
				Awesome Exercises You <span> Should Know</span>
			</h2>
			<div className='search-bar'>
				<input
					type='text'
					placeholder='Search Exercises'
					value={search}
					onChange={(e) => setSearch(e.target.value.toLowerCase())}
				/>
				<button onClick={handleSearch} className='search-btn'>
					Search
				</button>
			</div>
			<div className='categories'>
				<HorizontalScrollbar
					data={bodyParts}
					bodyPart={bodyPart}
					setBodyPart={setBodyPart}
					isBodyParts
				/>
			</div>
		</div>
	);
}

export default SearchExercises;
