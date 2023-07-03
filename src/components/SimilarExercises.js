import React, { useEffect, useState } from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
const SimilarExercises = () => {
	const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
	const [equipmentExercises, setEquipmentExercises] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		const fetchExercisesData = async () => {
			const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises';
			const exerciseData = await fetchData(
				`${exerciseDbUrl}/exercise/${id}`,
				exerciseOptions
			);
			const targetMuscleExercisesData = await fetchData(
				`${exerciseDbUrl}/target/${exerciseData.target}`,
				exerciseOptions
			);
			setTargetMuscleExercises(targetMuscleExercisesData);
			const equipmentExercisesData = await fetchData(
				`${exerciseDbUrl}/equipment/${exerciseData.equipment}`,
				exerciseOptions
			);
			setEquipmentExercises(equipmentExercisesData);
		};
		fetchExercisesData();
	}, [id]);

	return (
		<div className='similar-wrapper'>
			<h3>Exercises that target the same muscle group</h3>
			<div>
				{targetMuscleExercises.length ? (
					<HorizontalScrollbar data={targetMuscleExercises} />
				) : (
					<Loader />
				)}
			</div>
			<h3>Exercises that uses the same equipment</h3>
			<div>
				{equipmentExercises.length ? (
					<HorizontalScrollbar data={equipmentExercises} />
				) : (
					<Loader />
				)}
			</div>
		</div>
	);
};

export default SimilarExercises;
