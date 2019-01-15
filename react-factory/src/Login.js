import React from 'react';
import App from './App';
/*
    A Simple Login to get the user.
*/
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: '', value: '' };

        this.login = this.login.bind(this);
        this.userInput = this.userInput.bind(this);
    }

    userInput(event) {
        this.setState({ value: event.target.value });
    }

    login(event) {
        this.setState({ user: this.state.value })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                {
                    this.state.user ? <App user={this.state.user} /> :
                        <form>
                            <input type="text" value={this.state.value} onChange={this.userInput} />
                            <button onClick={this.login}>Login</button>
                        </form>
                }
            </div>
        );
    }
}
