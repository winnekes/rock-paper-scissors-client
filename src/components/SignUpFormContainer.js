import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUpForm from './SignUpForm';
import { signUp, clearErrorMessage } from '../actions/user';

class SignUpFormContainer extends Component {
    state = {
        username: '',
        password: '',
    };

    onSubmit = async event => {
        event.preventDefault();
        await this.props.signUp(this.state.username, this.state.password);
        setTimeout(() => {
            if (this.props.error) {
                console.log(this.props.error);
            } else {
                this.props.history.push('/login');
            }
        }, 500);
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    componentDidMount = () => {
        this.props.clearErrorMessage();
    };

    render() {
        return (
            <SignUpForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state}
                error={this.props.error}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
    };
};
export default connect(mapStateToProps, { signUp, clearErrorMessage })(
    SignUpFormContainer
);
