import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import PostList from "./PostList";

const App = () => {
	console.log("App Loaded");

	return (
		<Router>
			<Switch>
				<Route path="/discover" exact={true} component={() => <p>Discover</p>} />
				<Route path="/r/:sub" component={() => <p>Sub</p>} />
				<Route component={PostList} />
			</Switch>

			<Switch>
				<Route path={["/", "/r/:sub"]} exact={true} render={() => <Nav light={true} />} />
				<Route component={Nav} />
			</Switch>
		</Router>
	);
};

export default App;
