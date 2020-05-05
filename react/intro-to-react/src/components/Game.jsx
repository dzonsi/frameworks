import React from 'react';

import Board from './Board';
import calculateWinner from '../calculateWinner';
import returnWinner from '../returnWinner';
import returnLocation from '../returnLocation';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [{
				squares: Array(9).fill(null),
				location: Array(9).fill(null)
			}],
			stepNumber: 0,
			xIsNext: true,
			asc: true
		};
		// bind method or use arrow function
		this.reverseOrder = this.reverseOrder.bind(this);
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    // location of each move
    const location = current.location.slice();
    const obj = returnLocation(i);
    location[i] = obj;
    this.setState({
    	history: history.concat([{
    		squares: squares,
    		location: location
    	}]),
    	stepNumber: history.length,
    	xIsNext: !this.state.xIsNext,
    });
	}

	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: (step % 2) === 0
		});
	}

	reverseOrder() {
		this.setState({
			asc: !this.state.asc
		});
	}

	render() {
		console.log(this.state.history)
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = calculateWinner(current.squares);
		const moves = history.map((step, move) => {
			const desc = move ? 'Go to move #' + move : 'Go to game start';
			return (
				<li key={move}>
					<button
						className={this.state.stepNumber === move ? 'current' : ''}
						onClick={() => this.jumpTo(move)}
					>
						{desc}
					</button>
				</li>
			);
		});
		// change order if order is desc
		if(!this.state.asc) {
			moves.reverse();
		}
		let status;
		let winSquares = null;
		if (winner) {
			status = 'Winner: ' + winner;
			winSquares = returnWinner(current.squares);
		} else {
			if(this.state.stepNumber === 9) {
				status = 'The result is a draw.'
			} else {
				status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
			}
		}
		return (
			<div className="game">
        <div className="game-board">
          <Board
          	winSquares={winSquares}
          	squares={current.squares}
          	onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button className="btn" onClick={this.reverseOrder}>Change order({this.state.asc ? 'desc' : 'asc'})</button>
          <ol reversed={this.state.asc ? false : true}>{moves}</ol>
        </div>
      </div>
		);
	}
}

export default Game;