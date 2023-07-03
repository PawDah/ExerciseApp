import React, { useEffect, useState } from 'react';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import { useParams } from 'react-router-dom';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const Detail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	
	const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

	const { id } = useParams();

	const extraDetail = [
		{
			icon: BodyPartImage,
			name: bodyPart,
		},
		{
			icon: TargetImage,
			name: target,
		},
		{
			icon: EquipmentImage,
			name: equipment,
		},
	];

	useEffect(() => {
		const fetchExercisesData = async () => {
			const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises';
			const exerciseData = await fetchData(
				`${exerciseDbUrl}/exercise/${id}`,
				exerciseOptions
			);
			setExerciseDetail(exerciseData);
		
		};
		fetchExercisesData();
	}, [id]);
	return (
		<div className='detail-wrapper'>
			<img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
			<div className='description'>
				<h3>{name}</h3>
				<p>
					Exercises keep you strong. <span>{name}</span> is one of the best
					exercises to target your <span>{target}.</span> It will help you
					improve your mood and gain energy.
				</p>
				{extraDetail.map((item) => (
					<div key={item.name} className='icons'>
						<div className='icons-background'>
							<img src={item.icon} alt='' />
						</div>
						<p>{item.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Detail;
