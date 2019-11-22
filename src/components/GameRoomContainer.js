import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import GameRoom from './GameRoom';

import request from 'superagent';
import MessageLoading from './MessageLoading';

import { baseUrl } from '../constants';

class GameRoomContainer extends Component {
    name = this.props.match.params.name;
    joinRoom = async () => {
        const url = `${baseUrl}/join/${this.name}`;

        const response = await request
            .put(url)
            .set('Authorization', `Bearer ${this.props.user}`);
        console.log(response);
    };

    startGame = async () => {
        const url = `${baseUrl}/start/${this.name}`;

        const response = await request
            .put(url)
            .set('Authorization', `Bearer ${this.props.user}`);
        console.log(response);
    };

    endGame = async () => {
        this.props.history.push('/lobby');
        const url = `${baseUrl}/end/${this.name}`;

        const response = await request
            .put(url)
            .set('Authorization', `Bearer ${this.props.user}`);
        console.log(response);
    };

    /*
    changeTurn = async () => {
        const url = `${baseUrl}/turn/${this.name}`;

        const response = await request
            .put(url)
            .set('Authorization', `Bearer ${this.props.user}`);
        console.log(response);
    };

     assignPoint = async () => {
        const url = '${baseUrl}/point';

        const response = await request
            .put(url)
            .set('Authorization', `Bearer ${this.props.user}`);
        console.log(response);
    }; */

    componentDidMount = () => {
        if (!this.props.user) this.props.history.push('/login');
    };
    render() {
        const { name } = this.props.match.params;
        const { rooms } = this.props;

        const room = rooms.find(room => room.name === name);

        return (
            <Fragment>
                {this.props.rooms && (
                    <GameRoom
                        room={room}
                        joinRoom={this.joinRoom}
                        startGame={this.startGame}
                        endGame={this.endGame}
                        user={this.props.user}
                        username={this.props.username}
                        dispatch={this.props.dispatch}
                    />
                )}
                {!this.props.rooms && <MessageLoading />}
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return { user: state.user, rooms: state.rooms, username: state.username };
}

export default connect(mapStateToProps)(GameRoomContainer);
