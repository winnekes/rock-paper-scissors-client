import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUpForm from './SignUpForm';
import { signUp } from '../actions/user';

class SignUpFormContainer extends Component {
    state = {
        email: '',
        username: '',
        password: '',
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.signUp(
            this.state.email,
            this.state.username,
            this.state.password
        );
        this.props.history.push('/login');
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        return (
            <SignUpForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state}
            />
        );
    }
}

export default connect(null, { signUp })(SignUpFormContainer);
