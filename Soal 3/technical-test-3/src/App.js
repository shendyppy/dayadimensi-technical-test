import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./stores";
import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Company from "./pages/Company";
import Education from "./pages/Education";
import Community from "./pages/Community";
import CompanyDetail from "./components/CompanyDetail";
import EducationDetail from "./components/EducationDetail";
import CommunityDetail from "./components/CommunityDetail";

function App() {
	return (
		<Router>
			<Provider store={store}>
				<Navbar />
				<Switch>
					<Route path="/company/:id">
						<CompanyDetail />
					</Route>
					<Route path="/education/:id">
						<EducationDetail />
					</Route>
					<Route path="/community/:id">
						<CommunityDetail />
					</Route>
					<Route path="/companies">
						<Company />
					</Route>
					<Route path="/communities">
						<Community />
					</Route>
					<Route path="/educations">
						<Education />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Provider>
		</Router>
	);
}

export default App;
