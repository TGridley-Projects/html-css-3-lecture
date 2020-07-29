import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="main-header">
					<img
						src="https://v.fastcdn.co/u/420f55dd/28913912-0-dm-white-logo-2.png"
						alt="DevMountain"
					/>
					<nav>
						<span>Home</span>
						<span>About</span>
						<span>Contact</span>
					</nav>
				</header>
				<section className="animation-transition">
					<img className="react-logo" src={logo} alt="React.js" />
					<div className="transition-circle">Hover your mouse over me!</div>
				</section>
			</div>
		);
	}
}

export default App;
