import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Lobby from './Lobby';
import { setRooms, addRoom } from '../actions/rooms';

class LobbyContainer extends Component {
    stream = new EventSource('https://mygame-server.herokuapp.com/stream');

    componentDidMount = () => {
        this.stream.onmessage = event => {
            const { data } = event;

            const parsed = JSON.parse(data);

            if (Array.isArray(parsed)) {
                this.props.setRooms(parsed);
            } else {
                this.props.addRoom(parsed);
            }
        };
    };

    render() {
        if (this.props.user) {
            return <Lobby rooms={this.props.rooms} />;
        } else {
            return <p>Please login</p>;
        }
    }
}

function mapStateToProps(state) {
    return { rooms: state.rooms, user: state.user };
}

export default connect(mapStateToProps, { setRooms, addRoom })(LobbyContainer);
