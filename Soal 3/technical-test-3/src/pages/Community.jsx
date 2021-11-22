import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Card from "../components/Card";
import { fetchCommunity } from "../stores/community/action";

function Community() {
	const isCommunity = true;
	const dispatch = useDispatch();
	const { communities, loadingFetch, error } = useSelector(
		(state) => state.community
	);

	useEffect(() => {
		dispatch(fetchCommunity());
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
						{communities.map((community, index) => {
							return (
								<Card
									community={community}
									key={index}
									isCommunity={isCommunity}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default Community;
