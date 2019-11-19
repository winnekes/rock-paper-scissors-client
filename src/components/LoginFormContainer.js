import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../actions/user';

class LoginFormContainer extends Component {
    state = { username: '', password: '' };

    onSubmit = event => {
        event.preventDefault();
        this.props.login(this.state.username, this.state.password);
        this.props.history.push('/lobby');
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        return (
            <LoginForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state}
            />
        );
    }
}

export default connect(null, { login })(LoginFormContainer);
