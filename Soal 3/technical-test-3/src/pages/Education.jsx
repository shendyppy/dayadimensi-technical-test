import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Card from "../components/Card";
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
		return (
			<>
				<h1>Something Went Wrong!</h1>
			</>
		);
	}

	if (loadingFetch) {
		return (
			<>
				<div>
					<div className="container mx-auto text-center mt-10 mb-10">
						<lottie-player
							src="https://assets10.lottiefiles.com/packages/lf20_WXXDFD.json"
							background="transparent"
							speed="1"
							style={{ width: "100%", height: "100%" }}
							loop
							autoplay
						></lottie-player>
					</div>
				</div>
			</>
		);
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
