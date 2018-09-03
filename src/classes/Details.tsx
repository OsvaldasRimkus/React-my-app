import * as React from 'react';

interface DetailsProps {
    userName: string
    userId: number
}

interface DetailsState {
    userName: string
    userId: number
}

const tableStyle = {
    border: '1px solid black',
}

class Details extends React.Component<DetailsProps, DetailsState> {
    
    constructor(props: any) {
            super(props);
            this.state = {
                userName: this.props.userName,
                userId: this.props.userId,
            }
    }

    componentWillReceiveProps(nextProps: any) {
        this.setState({
            userName: nextProps.userName,
            userId: nextProps.userId
        })
    }

    public render() {
        if (this.state.userId == -1) {
            return (
                <div>
                    no data yet
                </div>
            )
        } else {
            return(
                <div>
                    <table style={tableStyle}>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>ID</th>
                            </tr>
                            <tr>
                                <td>{this.state.userName}</td>
                                <td>{this.state.userId}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    }

}

export default Details;