import React from "react";

import { useHistory } from "react-router-dom";

function Card({
	isCommunity,
	community,
	isCompany,
	company,
	isEducation,
	education,
}) {
	const history = useHistory();

	const handleToEducationDetail = (id) => {
		history.push(`/education/${id}`);
	};

	const handleToCommunityDetail = (id) => {
		history.push(`/community/${id}`);
	};

	const handleToCompanyDetail = (id) => {
		history.push(`/company/${id}`);
	};

	if (isCommunity) {
		return (
			<>
				<div class="card shadow-xl image-full">
					<figure>
						<img src={community.imgUrl} alt="No data" />
					</figure>
					<div class="justify-end card-body">
						<div class="card-actions mx-auto">
							<button
								class="btn btn-primary"
								onClick={(e) => {
									e.preventDefault();
									handleToCommunityDetail(community.id);
								}}
							>
								{community.title}
							</button>
						</div>
					</div>
				</div>
			</>
		);
	}

	if (isCompany) {
		return (
			<>
				<div class="card shadow-xl image-full">
					<figure>
						<img src={company.imgUrl} alt="No data" />
					</figure>
					<div class="justify-end card-body">
						<div class="card-actions mx-auto">
							<button
								class="btn btn-primary"
								onClick={(e) => {
									e.preventDefault();
									handleToCompanyDetail(company.id);
								}}
							>
								{company.title}
							</button>
						</div>
					</div>
				</div>
			</>
		);
	}

	if (isEducation) {
		return (
			<>
				<div class="card shadow-xl image-full">
					<figure>
						<img src={education.imgUrl} alt="No data" />
					</figure>
					<div class="justify-end card-body">
						<div class="card-actions mx-auto">
							<button
								class="btn btn-primary"
								onClick={(e) => {
									e.preventDefault();
									handleToEducationDetail(education.id);
								}}
							>
								{education.title}
							</button>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Card;
