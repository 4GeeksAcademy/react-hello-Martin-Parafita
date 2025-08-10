import React from "react";
import Navbar from "./Navbar";
import MiJumbotron from "./MiJumbotron";
import CardList from "./CardList";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Navbar/>
			<MiJumbotron/>
			<CardList/>
		</div>
	);
};

export default Home;