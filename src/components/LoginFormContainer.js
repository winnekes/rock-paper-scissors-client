import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login, clearErrorMessage } from '../actions/user';

class LoginFormContainer extends Component {
    state = { username: '', password: '' };

    onSubmit = event => {
        event.preventDefault();
        this.props.login(this.state.username, this.state.password);
        setTimeout(() => {
            if (this.props.error) {
                console.log(this.props.error);
            } else {
                this.props.history.push('/lobby');
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
            <LoginForm
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
export default connect(mapStateToProps, { login, clearErrorMessage })(
    LoginFormContainer
);
