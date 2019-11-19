import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import GameRoom from './GameRoom';

import { joinRoom } from '../actions/rooms';

class GameRoomContainer extends Component {
    componentDidMount = () => {
        if (!this.props.user) this.props.history.push('/login');
    };
    render() {
        return (
            <Fragment>
                {this.props.room && (
                    <GameRoom
                        room={this.props.room}
                        joinRoom={this.props.joinRoom}
                    />
                )}
                {!this.props.room && <p>Loading ...</p>}
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return { user: state.user, room: state.room };
}

export default connect(mapStateToProps, { joinRoom })(GameRoomContainer);
