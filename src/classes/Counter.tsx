import * as React from 'react';

interface CounterState {
    count: number
}

class Counter extends React.Component<{}, CounterState> {

    constructor(props:any){
        super(props);
        this.state = {
            count: 0,
        }
    }

    modify(i:number) {
        this.setState({count: (this.state.count + i)})
    }

    // increment() {
    //     this.setState({count: (this.state.count + 1)})
    // }

    // decrement() {
    //     this.setState({count: (this.state.count - 1)})
    // }

    render() {
        return(
            <div>
                <span>Current count: {this.state.count}</span>
                <div>
                    <button className="increment" onClick={() => this.modify(1)}>Increment count</button>
                    <button className="decrement" onClick={() => this.modify(-1)}>Decrement count</button>
                </div>
            </div>
        ) 
    }
}

export default Counter;