import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

import { fetchEducationDetail } from "../stores/education/action";
import Error from "./Error";
import Loading from "./Loading";

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
		return <Error />;
	}

	if (loadingFetchDetail) {
		return <Loading />;
	}

	return (
		<>
			<div
				class="card bordered mt-6 mr-10 ml-10 mb-10 text-center"
				style={{ borderWidth: 1, borderColor: "black" }}
			>
				<figure>
					<img src={educationDetail.imgUrl} alt="No data" />
				</figure>
				<div class="card-body">
					<h2 class="card-title text-2xl text-center">
						{educationDetail.title}
					</h2>
					<p class="card-title text-lg text-center italic">
						{educationDetail.description}
					</p>
					<div class="card-actions mx-auto">
						<button
							class="btn btn-outline"
							style={{ backgroundColor: "#f15447" }}
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
