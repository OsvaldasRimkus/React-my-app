import * as React from 'react';

interface FormState {
    id: number
}

interface FormProps {

}

class Form extends React.Component<FormProps, FormState> {

    constructor(props: any) {
        super(props);
        this.state = {
            id: -1,
        }
    }

    public handleChange = (event: any): void => {
        let value = event.target.value;
        console.log(this);
        this.setState({id: value});
    }

    public render() {
        if (this.state.id !== -1) {
            return (
                <div>
                    <span><b>EPIC FORM</b></span>
                    <form>
                        <label>
                            Name:
                            <input type="text" value={this.state.id} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <span><b>EPIC FORM</b></span>
                    <form>
                        <label>
                            Name:
                            <input type="text" value="" onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )
        }

        
    }
}

export default Form;