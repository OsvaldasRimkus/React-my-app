import * as React from 'react';
import Board from './Board';
import UserList from './UserList';
import Form from './Form';
import TestingComponent from './TestingComponent'
import Counter from './Counter';
import Link from './testings/Link';

interface GameProps {

}

interface GameState {
  history: [];
  xIsNext: boolean;
  stepNumber: number;
  counterList: any;
}


class Game extends React.Component<GameProps, GameState> {

  // public componentWillMount() {
  //   console.log('Game: component will mount');
  // }

  // public componentDidMount() {
  //   console.log('Game: component did mount');
  // }
  // public componentWillReceiveProps(nextProps: any) {
  //   console.log('Game: component will receive props. nextProps: ', nextProps);
  // }

  // public shouldComponentUpdate(nextProps: any, nextState: any) {
  //   console.log("Game: should component update", nextProps, nextState);
  //   return true;
  // }

  // public componentWillUpdate(nextProps: any, nextState: any) {
  //   console.log("Game: component will update", nextProps, nextState);
  // }

  // public componentDidUpdate(prevProps: any, prevState: any) {
  //   console.log('Game: component did update', prevProps, prevState);
  // }

  // public componentWillUnmount() {
  //   console.log('Game: component will unmount');
  // }

  state: any;

  constructor(props: GameProps) {
    // console.log("Game: constructor")
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0,
      counterList: [<Counter key={0} />,],
    };
  }

  public handleClick(i: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  public jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  addCounter() {
    // let newArray = Array(this.state.counterList.length + 1).fill(<Counter />);
    // console.log(newArray);
    // this.setState({counterList: newArray});

    let counters = this.state.counterList;
    console.log("new array");
    let length = counters.length;
    let newArray:React.ReactNode[] = [];
    console.log('before for ');
    for (let i = 0; i <= length; i++) {
      newArray.push(<Counter key={i}/>)
    }
    console.log(newArray);
    this.setState({counterList: newArray});
  }

    public render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = this.calculateWinner(current.squares);
  
      const moves = history.map((step: number, move: number) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });

      let status;
      if (history[9] != null && !winner){
        status = "ITS A DRAW";
      } else if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
      

      let numA = 5;
      let numB = 9;
      let Operation = "div";

      return (
        <div>
          <div className="game">

            <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
              xIsNext={this.state.xIsNext}
            />

            </div>
            <div className="game-info">
              <div>{status}</div>
              <ol>{moves}</ol>
            </div>
          </div>
          <div>
            <UserList />
          </div>
          <div style={{border: '1px solid black'}}>
            <Form />
            <span>TASK: {this.state.taskDescription}</span>  
          </div>
          <div>
            <TestingComponent a={numA} b={numB} o={Operation}/>
          </div>
          <br />
          <div>
            <button onClick={(e) => this.addCounter()}>add counter</button>
            {this.state.counterList}
          </div>
          <Link text={'go Google!'} page={'http://www.google.lt'}/>
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
  

  export default Game;