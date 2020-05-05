import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import PostList from "./PostList";
import Discover from "./Discover";

const App = () => {
	console.log("App Loaded");

	return (
		<Router>
			<Switch>
				<Route path="/discover" exact={true} component={Discover} />
				<Route path="/r/:sub" component={PostList} />
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
