import React from 'react';

import Square from './Square';

class Board extends React.Component {

  renderSquare(i) {
  	const winner = this.props.winSquares;
  	
    return (
			<Square
				key={i}
				winner={(winner && winner.includes(i) ? true : false)}
				value={this.props.squares[i]}
				onClick={() => this.props.onClick(i)}
			/>
    );
  }

  createSquares = () => {
  	const board = [];
  	var index = 0;
  	for(var i = 0;i < 3; i++) {
  		let board_row = [];
  		for(var j = 0; j < 3; j++) {
  			board_row.push(this.renderSquare(index));
  			index++;
  		}
  		board.push(<div className="board-row" key={i}>{board_row}</div>);
  	}
  	return board;
  }

  render() {
    return (
      <div>
        {this.createSquares()}
      </div>
    );
  }
}

export default Board;