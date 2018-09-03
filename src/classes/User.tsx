import * as React from 'react';
import axios from 'axios';

interface UserProps {
    id: number
    name: string
    onClick: (name:string, i:number) => void;
}

interface UserState {
    id: number
    name: string
    todoItem: string
}

const rowStyle = {
    border: '1px solid black',
}

class User extends React.Component<UserProps, UserState> {

    constructor(props: UserProps) {
        super(props);
        this.state = {
            id: -1, 
            name: '',
            todoItem: '',
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos/' + this.props.id).then(response =>{
        // console.log('resolving todo for ', this.props.id, response.data.title)    
        this.setState({todoItem: response.data.title})
        })
    }

    public render() {
        return (
            <tr>
                <td style={rowStyle} onClick={() => this.props.onClick(this.props.name, this.props.id)}>{this.props.name}</td>
                <td>{this.state.todoItem}</td>
            </tr>
            
            // <li key={this.props.id}>{this.props.name} has TODO: {this.state.todoItem} RIGHT NOW!</li>
        )
    }
}

export default User;