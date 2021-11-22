import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Card from "../components/Card";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { fetchEducations } from "../stores/education/action";

function Education() {
	const isEducation = true;
	const dispatch = useDispatch();
	const { educations, loadingFetch, error } = useSelector(
		(state) => state.education
	);

	useEffect(() => {
		dispatch(fetchEducations());
	}, [dispatch]);

	if (error) {
		return <Error />;
	}

	if (loadingFetch) {
		return <Loading />;
	}

	return (
		<>
			<div>
				<div className="container mx-auto text-center mt-10 mb-10">
					<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-2 ml-10 mr-10">
						{educations.map((education, index) => {
							return (
								<Card
									education={education}
									key={index}
									isEducation={isEducation}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default Education;
