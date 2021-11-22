import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { fetchCommunityDetail } from "../stores/community/action";

function CommunityDetail() {
	const history = useHistory();
	const dispatch = useDispatch();
	const { id } = useParams();

	const { communityDetail, loadingFetchDetail, error } = useSelector(
		(state) => state.community
	);

	const handleGoBack = () => {
		history.push("/companies");
	};

	useEffect(() => {
		dispatch(fetchCommunityDetail(id));
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
				class="card bordered mt-6 mr-10 ml-10 mb-10 text-center"
				style={{ borderWidth: 1, borderColor: "black" }}
			>
				<figure>
					<img src={communityDetail.imgUrl} alt="No data" />
				</figure>
				<div class="card-body">
					<h2 class="card-title text-2xl text-center">
						{communityDetail.title}
					</h2>
					<p class="card-title text-lg text-center italic">
						{communityDetail.description}
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

export default CommunityDetail;
