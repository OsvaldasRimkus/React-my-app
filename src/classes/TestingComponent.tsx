import * as React from 'react';
import { mathOperation } from './testings/MathFunction';

interface TestingComponentProps {
    a: number
    b: number
    o: string
}



class TestingComponent extends React.Component<TestingComponentProps> {

    constructor(props:TestingComponentProps) {
        super(props);
    }

    // executeOperation(a: number, b: number, o:string) {
    //     if (o === 'sum') {
    //         return a + b;    
    //     } else if (o === 'dif') {
    //         return a - b;
    //     } else if (o === 'div') {
    //         return a / b;
    //     } else if (o === 'mul') {
    //         return a * b;
    //     } else {
    //         return null;
    //     }
    // }

    render() {
        let result = mathOperation(this.props.a, this.props.b, this.props.o);

        if (result != null) {
            return(
                <span>result: {result}</span>
            ) 
        } else {
            return(
                <span>Wrong input</span>
            ) 
        }

        
    }

}

export default TestingComponent;