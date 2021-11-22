import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./stores";
import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Data from "./pages/Data";
import Detail from "./pages/Detail";

function App() {
	return (
		<Router>
			<Provider store={store}>
				<Navbar />
				<Switch>
					<Route path="/detail/:id">
						<Detail />
					</Route>
					<Route path="/data">
						<Data />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				<Footer />
			</Provider>
		</Router>
	);
}

export default App;
