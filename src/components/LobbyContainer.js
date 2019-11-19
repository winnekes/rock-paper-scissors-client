import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lobby from './Lobby';
import { selectRoom } from '../actions/rooms';
import AuthError from './AuthError';
class LobbyContainer extends Component {
    render() {
        if (this.props.user) {
            return (
                <Lobby
                    rooms={this.props.rooms}
                    selectRoom={this.props.selectRoom}
                />
            );
        } else {
            return <AuthError />;
        }
    }
}

function mapStateToProps(state) {
    return { rooms: state.rooms, user: state.user };
}

export default connect(mapStateToProps, { selectRoom })(LobbyContainer);
