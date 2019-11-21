import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lobby from './Lobby';

import MessageErrorAuth from './MessageErrorAuth';
class LobbyContainer extends Component {
    render() {
        if (this.props.user) {
            return (
                <Lobby
                    rooms={this.props.rooms}
                    username={this.props.username}
                    dispatch={this.props.dispatch}
                />
            );
        } else {
            return <MessageErrorAuth />;
        }
    }
}

function mapStateToProps(state) {
    return { rooms: state.rooms, user: state.user, username: state.username };
}

export default connect(mapStateToProps)(LobbyContainer);
