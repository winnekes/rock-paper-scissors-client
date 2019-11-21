import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import request from 'superagent';

import Pulse from 'react-reveal/Pulse';
import { baseUrl } from '../constants';
import './styles/game.css';

class Game extends Component {
    images = {
        scissors: 'https://i.imgur.com/FRnnuuP.png',
        paper: 'https://i.imgur.com/IYCxi41.png',
        rock: 'https://i.imgur.com/vWSP2PV.png',
    };

    imagesReversed = {
        scissors: 'https://i.imgur.com/blxcG88.png',
        paper: 'https://i.imgur.com/NNjXwqX.png',
        rock: 'https://i.imgur.com/8YOLpwa.png',
    };

    decideWinner = async weapon => {
        const url = `${baseUrl}/decideWinner/${this.props.room.name}`;
        const response = await request
            .put(url)
            .set('Authorization', `Bearer ${this.props.user}`)
            .send({ choice: weapon });
    };

    render() {
        console.log(this.props.room);

        const thisPlayer = this.props.room.users.find(
            user => user.username === this.props.username
        );
        const otherPlayer = this.props.room.users.find(
            user => user.username !== this.props.username
        );
        return (
            <div>
                {thisPlayer && (
                    <Fragment>
                        {thisPlayer.choice === 'no choice' &&
                            this.props.room.status !== 'game is over' && (
                                <Fragment>
                                    <h2>Rock, Paper, Scissors</h2>

                                    <h3>Make your choice now!</h3>
                                    <div className="choices">
                                        <Pulse>
                                            <img
                                                alt=""
                                                src={this.images.scissors}
                                                onClick={() =>
                                                    this.decideWinner(
                                                        'scissors'
                                                    )
                                                }
                                            />

                                            <img
                                                alt=""
                                                src={this.images.paper}
                                                onClick={() =>
                                                    this.decideWinner('paper')
                                                }
                                            />
                                            <img
                                                alt=""
                                                src={this.images.rock}
                                                onClick={() =>
                                                    this.decideWinner('rock')
                                                }
                                            />
                                        </Pulse>
                                    </div>
                                </Fragment>
                            )}
                        {thisPlayer.choice !== 'no choice' &&
                            this.props.room.winner === 'no winner' && (
                                <Fragment>
                                    <h3>You chose: {thisPlayer.choice}</h3>
                                    <div className="choices">
                                        <Pulse>
                                            <img
                                                alt=""
                                                src={
                                                    this.images[
                                                        thisPlayer.choice
                                                    ]
                                                }
                                            />
                                        </Pulse>
                                    </div>

                                    <p>waiting for other player ...</p>
                                </Fragment>
                            )}
                        {thisPlayer.choice !== 'no choice' &&
                            this.props.room.winner !== 'no winner' && (
                                <Fragment>
                                    <div className="choices">
                                        <div>
                                            <h3>
                                                You chose: {thisPlayer.choice}
                                            </h3>
                                            <Pulse>
                                                <img
                                                    alt=""
                                                    src={
                                                        this.images[
                                                            thisPlayer.choice
                                                        ]
                                                    }
                                                />
                                            </Pulse>
                                        </div>

                                        <div>
                                            <h3>
                                                {otherPlayer.username} chose:{' '}
                                                {otherPlayer.choice}
                                            </h3>

                                            <Pulse>
                                                <img
                                                    alt=""
                                                    src={
                                                        this.imagesReversed[
                                                            otherPlayer.choice
                                                        ]
                                                    }
                                                />
                                            </Pulse>
                                        </div>
                                    </div>
                                </Fragment>
                            )}
                    </Fragment>
                )}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return { username: state.username, rooms: state.rooms };
}

export default connect(mapStateToProps)(Game);
