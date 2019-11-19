import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateRoomForm from './CreateRoomForm';
import { createRoom } from '../actions/rooms';

class CreateRoomContainer extends Component {
    state = {
        name: '',
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.createRoom(this.state.name);
        this.setState({
            name: '',
        });
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    render() {
        return (
            <CreateRoomForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state}
            />
        );
    }
}

export default connect(null, { createRoom })(CreateRoomContainer);
