import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	constructor (){
		super()

		this.state = {
			dropDownVisible: false,
			clockwise: true
		}
	}

	toggleDropDown = () => {
		this.setState({
			dropDownVisible: !this.state.dropDownVisible 
		})
	}

	toggleSpin = () => {
		this.setState({
			clockwise: !this.state.clockwise
		})
	}
	
	render() {
		return (
			<div className="App">
				<header className="main-header">
					<img
						src="https://v.fastcdn.co/u/420f55dd/28913912-0-dm-white-logo-2.png"
						alt="DevMountain"
					/>
					<nav className="desktop-menu">
						<span>Home</span>
						<span>About</span>
						<span>Contact</span>
					</nav>
					<div className="dropdown" onClick={this.toggleDropDown}>Menu</div>
					{
						this.state.dropDown ? (
					<nav className="mobile-menu">
						<span>Home</span>
						<span>About</span>
						<span>Contact</span>
					</nav>)
		 			: null
					}
				</header>
				<section className="animation-transition">
					<img 
						className={this.state.clockwise ? "react-logo spin-clockwise" : "react-logo spin-counterClockwise"}
					 src={logo} 
					 alt="React.js"
					onClick = {this.toggleSpin}
					/>
					<div className="transition-circle">Hover your mouse over me!</div>
				</section>
			</div>
		);
	}
}

export default App;
