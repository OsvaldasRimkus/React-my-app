import * as React from 'react';
import axios from 'axios';
import User from './User';
import Details from './Details'

interface UserListProps {
}

interface UserListState {
    userList: UserItem[]
    selectedUser: string
    selectedUserId: number
}

interface UserItem {
    id: number
    name: string
}

const tableStyle = {
    border: '1px solid black',
}

class UserList extends React.Component<UserListProps, UserListState> {

    constructor(props: any) {
        super(props);
        this.state = {
            userList: [],
            selectedUser: '',
            selectedUserId: -1,
        }
    }

    componentDidMount() {
        // console.log("userList: component will mount");
        // axios.get('https://api.github.com/users').then(response => console.log(response.data))
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => 
        this.setState({userList: response.data})
        )
    }

    public handleClick(name: string, i: number) {
        this.setState({selectedUser: name});
        this.setState({selectedUserId: i});
    }

    public render() {
        console.log(this.state.userList);
        return (
            <div>
                <table style={tableStyle}>
                    <tbody>
                        <tr>
                            <th>NAME</th>
                            <th>TASK</th>
                        </tr>
                        {this.state.userList.map(person => 
                            <User 
                                id={person.id}
                                name={person.name} 
                                onClick={(name, i) => this.handleClick(name, i)}
                            />
                        )}
                    </tbody>
                </table>
                <Details userName={this.state.selectedUser} userId={this.state.selectedUserId}/>
            </div>
               
        )
    }
}

export default UserList;