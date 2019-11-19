import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import GameRoom from './GameRoom';

import request from 'superagent';

class GameRoomContainer extends Component {
    name = this.props.match.params.name;

    joinRoom = async () => {
        const url = `http://localhost:4000/join/${this.name}`;

        const response = await request
            .put(url)
            .set('Authorization', `Bearer ${this.props.user}`);
        console.log(response);
    };

    startGame = async () => {
        const url = `http://localhost:4000/start/${this.name}`;

        const response = await request
            .put(url)
            .set('Authorization', `Bearer ${this.props.user}`);
        console.log(response);
    };

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
                        name={this.name}
                        room={room}
                        joinRoom={this.joinRoom}
                        startGame={this.startGame}
                    />
                )}
                {!this.props.rooms && <p>Loading ...</p>}
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return { user: state.user, rooms: state.rooms };
}

export default connect(mapStateToProps)(GameRoomContainer);
