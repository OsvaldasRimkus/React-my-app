import * as React from 'react';
import Square from './Square';

interface BoardProps {
  squares: any;
  onClick: (i:number) => void;
  xIsNext: string;
}



class Board extends React.Component<BoardProps, {}> {
  
  state: any;

  // constructor(props: any) {
  //     super(props);
  //     this.state = {
  //       squares: Array(9).fill(null),
  //       xIsNext: true,
  //     };
  //   }
  
  public handleClick(i: number) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.props.xIsNext,
    });
  }

  public renderSquare(i: number) {
      return <Square 
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
      />;
  }

  public render() {
    // const winner = this.calculateWinner(this.state.squares);
    // let status: string;
    // if (winner) {
    //   status = 'Winner: ' + winner;
    // } else {
    //   status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    // }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }

  public calculateWinner(squares: []): any {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

}

  export default Board;