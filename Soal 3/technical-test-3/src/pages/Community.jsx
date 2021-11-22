import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Card from "../components/Card";
import Error from "../components/Error";
import Loading from "../components/Loading";
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
