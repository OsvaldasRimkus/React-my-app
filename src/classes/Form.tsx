import * as React from 'react';

interface FormState {
    id: number,
}

interface FormProps {
    resolveInput: () => void,
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

    handleSubmit(e: React.MouseEvent) {
        e.preventDefault();
        this.props.resolveInput();
    }

    public render() {
        if (this.state.id !== -1) {
            return (
                <span>
                    <span><b>EPIC FORM</b></span>
                    <form>
                        <label>
                            Name:
                            <input type="text" value={this.state.id} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)} />
                    </form>
                </span>
            )
        } else {
            return (
                <span>
                    <span><b>EPIC FORM</b></span>
                    <form>
                        <label>
                            Name:
                            <input type="text" value="" onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </span>
            )
        }

        
    }
}

export default Form;