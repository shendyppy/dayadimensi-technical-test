import React from "react";

import { useHistory } from "react-router-dom";

function EarlyCard() {
	const history = useHistory();

	const handleToCompany = () => {
		history.push("/companies");
	};
	const handleToCommunity = () => {
		history.push("/communities");
	};
	const handleToEducation = () => {
		history.push("/educations");
	};

	return (
		<>
			<div>
				<div class="card shadow-xl image-full" style={{ height: "300px" }}>
					<figure>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Nokia_office_building_in_Hervanta_Tampere_1.jpg"
							alt="No data"
						/>
					</figure>
				</div>
				<div class="mx-auto mt-2">
					<button class="btn btn-primary" onClick={handleToCompany}>
						Company
					</button>
				</div>
			</div>
			<div>
				<div class="card shadow-xl image-full" style={{ height: "300px" }}>
					<figure>
						<img
							src="https://www.power-of-financial-aid.org/wp-content/uploads/2017/03/community.png"
							alt="No data"
						/>
					</figure>
				</div>
				<div class="mx-auto mt-2">
					<button class="btn btn-primary" onClick={handleToCommunity}>
						Community
					</button>
				</div>
			</div>
			<div>
				<div class="card shadow-xl image-full" style={{ height: "300px" }}>
					<figure>
						<img
							src="http://inventain.com/wp-content/uploads/2020/01/Children-And-Education-Are-Important-768x403.png"
							alt="No data"
						/>
					</figure>
				</div>
				<div class="mx-auto mt-2">
					<button class="btn btn-primary" onClick={handleToEducation}>
						Education
					</button>
				</div>
			</div>
		</>
	);
}

export default EarlyCard;
