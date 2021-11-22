import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

import { fetchEducationDetail } from "../stores/education/action";

function EducationDetail() {
	const history = useHistory();
	const dispatch = useDispatch();
	const { id } = useParams();

	const { educationDetail, loadingFetchDetail, error } = useSelector(
		(state) => state.education
	);

	const handleGoBack = () => {
		history.push("/educations");
	};

	useEffect(() => {
		dispatch(fetchEducationDetail(id));
	}, [dispatch, id]);

	if (error) {
		return (
			<>
				<h1>Something Went Wrong!</h1>
			</>
		);
	}

	if (loadingFetchDetail) {
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
			<div
				class="card bordered mt-6 mr-20 ml-20 mb-20"
				style={{ borderWidth: 1, borderColor: "black" }}
			>
				<figure>
					<img src={educationDetail.imgUrl} alt="No data" />
				</figure>
				<div class="card-body">
					<h2 class="card-title text-3xl text-center">
						{educationDetail.title}
					</h2>
					<p class="card-title text-lg text-center italic">
						{educationDetail.description}
					</p>
					<div class="card-actions mx-auto">
						<button
							class="btn btn-outline"
							style={{ backgroundColor: "#f15447", width: "200px" }}
							onClick={handleGoBack}
						>
							Back
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default EducationDetail;
