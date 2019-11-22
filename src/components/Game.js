import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import { baseUrl } from '../constants';
import './styles/game.css';
import winRoundFile from './sounds/win_round.mp3';
import loseRoundFile from './sounds/lose_round.mp3';
import UIfx from 'uifx';

const winRound = new UIfx(winRoundFile, { volume: 0.4, throttleMs: 100 });
const loseRound = new UIfx(loseRoundFile, { volume: 0.4, throttleMs: 100 });

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

    state = {
        soundPlayed: false,
    };
    decideWinner = async weapon => {
        const url = `${baseUrl}/decideWinner/${this.props.room.name}`;
        const response = await request
            .put(url)
            .set('Authorization', `Bearer ${this.props.user}`)
            .send({ choice: weapon });
    };
    playSound = () => {
        if (!this.state.soundPlayed && this.props.room.winner !== 'no winner') {
            if (this.props.room.winner === this.props.username) {
                winRound.play();
                this.setState({ soundPlayed: true });
            } else {
                loseRound.play();
                this.setState({ soundPlayed: true });
            }
        } else if (this.state.soundPlayed !== false) {
            this.setState({ soundPlayed: false });
        }
    };
    render() {
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
                                        <img
                                            className="pulse"
                                            alt=""
                                            src={this.images.scissors}
                                            onClick={() =>
                                                this.decideWinner('scissors')
                                            }
                                        />

                                        <img
                                            alt=""
                                            className="pulse"
                                            src={this.images.paper}
                                            onClick={() =>
                                                this.decideWinner('paper')
                                            }
                                        />
                                        <img
                                            alt=""
                                            className="pulse"
                                            src={this.images.rock}
                                            onClick={() =>
                                                this.decideWinner('rock')
                                            }
                                        />
                                    </div>
                                </Fragment>
                            )}
                        {thisPlayer.choice !== 'no choice' &&
                            this.props.room.winner === 'no winner' && (
                                <Fragment>
                                    <h3>You chose: {thisPlayer.choice}</h3>
                                    <div className="choices">
                                        <img
                                            alt=""
                                            className="pulse"
                                            src={this.images[thisPlayer.choice]}
                                        />
                                    </div>

                                    <p>waiting for other player ...</p>
                                </Fragment>
                            )}
                        {otherPlayer.choice !== 'no choice' &&
                            this.props.room.winner === 'no winner' && (
                                <p>
                                    {otherPlayer.username} has chosen. Don't
                                    think too hard, go with your gut ... decide
                                    now.
                                </p>
                            )}
                        {thisPlayer.choice !== 'no choice' &&
                            this.props.room.winner !== 'no winner' && (
                                <Fragment>
                                    <div className="choices">
                                        <div>
                                            <h3>You:</h3>

                                            <img
                                                alt=""
                                                className="pulse"
                                                src={
                                                    this.images[
                                                        thisPlayer.choice
                                                    ]
                                                }
                                            />
                                        </div>

                                        <div>
                                            <h3>{otherPlayer.username}:</h3>

                                            <img
                                                alt=""
                                                className="pulse"
                                                src={
                                                    this.imagesReversed[
                                                        otherPlayer.choice
                                                    ]
                                                }
                                            />
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
