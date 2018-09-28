// eslint-disable-next-line
import React, { Component } from 'react';
import './App.css';

const PlayerCard = ({color, symbol}) => {
	const style = {
		backgroundColor: color,
		backgroundImage: "url(./img/" + symbol + ".png)" 
	}
	return (
		<div style={style} className="player-card">
			{/*{symbol} // * check it if you wanna see what is it  */ }  
		</div>		
	)
}
class App extends Component {
	constructor(props) {
		super(props)
		this.symbol=["rock", "paper", "scissors"]
		this.state = {}
	}

	decideWinner = () => {
		const {playerBlue, playerRed} = this.state
		if(playerBlue === playerRed) {
			return "It's a draw"
		}
		if((playerBlue === "rock" && playerRed === "scissors") ||
				(playerBlue === "paper" && playerRed === "rock") ||
				(playerBlue === "scissors" && playerRed === "paper")) {
					return "Player Blue is a winner !"
				}
		return "Player Red is a winner !"
	}

	runGame = () => {
		/* const index = Math.floor(Math.random()*3)
		console.log(this.symbol[index]) */
		let counter = 0
		let myInterval = setInterval(() => {
			counter++
			this.setState({
				playerRed: this.symbol[Math.floor(Math.random()*3)],
				playerBlue: this.symbol[Math.floor(Math.random()*3)],
				winner: ""
			})

			if(counter > 20) { 
				clearInterval(myInterval) 
				this.setState({winner: this.decideWinner()}) // must call function
			}
		}, 100)
	}
	render() {
		return (
			<div className="App">
				<PlayerCard 
					color="red"
					symbol={this.state.playerRed} />
				<PlayerCard 	
					color="blue"
					symbol={this.state.playerBlue} />
				<p>{this.state.winner}</p>
				<button onClick={this.runGame}>Run game</button>
			</div>
		);
	}
}

export default App;
