import React from "react";
import Navbar from "./Navbar";
import MiJumbotron from "./MiJumbotron";
import CardList from "./CardList";
import Footer from "./Footer";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Navbar/>
			<MiJumbotron/>
			<CardList/>
			<Footer/>
		</div>
	);
};

export default Home;