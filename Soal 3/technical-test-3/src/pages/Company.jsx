import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Card from "../components/Card";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { fetchCompanies } from "../stores/company/action";

function Company() {
	const isCompany = true;
	const dispatch = useDispatch();
	const { companies, loadingFetch, error } = useSelector(
		(state) => state.company
	);

	useEffect(() => {
		dispatch(fetchCompanies());
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
						{companies.map((company, index) => {
							return (
								<Card company={company} key={index} isCompany={isCompany} />
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default Company;
