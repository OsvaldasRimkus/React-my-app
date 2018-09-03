import * as React from 'react';

interface SquareProps {
    value: string;
    onClick: () => void;
}

class Square extends React.Component<SquareProps, {}> {
    
    state: any;

    constructor(props: SquareProps){
        super(props);
        this.state = {
            value: this.props.value,
          };
    }
    
    // public scream(i: number) {
    //     this.setState({value: 'X'})
    // }

    public render() {
      return (
        // <button className="square" onClick={this.scream.bind(this, 'X')}>
        <button className="square" onClick={() => this.props.onClick()}>
          {this.props.value}
        </button>
      );
    }
  }

  export default Square;