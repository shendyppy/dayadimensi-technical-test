import React from "react";

import EarlyCard from "../components/EarlyCard";

function Home() {
	return (
		<>
			<div>
				<div className="container mx-auto text-center mt-32">
					<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-2 ml-10 mr-10">
						<EarlyCard />
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
