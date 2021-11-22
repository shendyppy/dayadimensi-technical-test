import React from "react";
import { useHistory } from "react-router-dom";

function Navbar() {
	const history = useHistory();

	const handleToHome = () => {
		history.push("/");
	};

	return (
		<>
			<div
				class="navbar mb-2 shadow-lg bg-neutral text-neutral-content"
				style={{ backgroundColor: "#f15447" }}
			>
				<button class="flex-none" onClick={handleToHome}>
					<img
						src="https://blog.klob.id/wp-content/uploads/2019/04/KLOB-15-150x150.png"
						alt="No data"
						width="40%"
						height="40%"
						className="ml-6"
					/>
				</button>
			</div>
		</>
	);
}

export default Navbar;
