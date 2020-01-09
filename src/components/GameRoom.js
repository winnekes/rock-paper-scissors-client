import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Flash from 'react-reveal/Flash';
import Scoreboard from './Scoreboard';
import Game from './Game';
import { logout } from '../actions/user';

export default function GameRoom(props) {
    const room = props.room;

    if (!room || !room.users) {
        return <Redirect to="/lobby" />;
    } else {
        return (
            <Fragment>
                <header>
                    <h3>Game Room</h3>
                    <h1> {room.name}</h1>
                    {room.status !== 'game is over' && (
                        <nav>
                            <Link to="/">Home</Link> |{' '}
                            <Link to="/lobby">Lobby</Link> |{' '}
                            <Link
                                to="/"
                                onClick={() => props.dispatch(logout())}
                            >
                                Logout
                            </Link>
                        </nav>
                    )}
                    <br />
                    {(room.status === 'not running' ||
                        room.status === 'waiting for one more player' ||
                        room.status === 'ready to start') && (
                        <h2>
                            Players:{' '}
                            {room.users.length > 0 &&
                                room.users.map((user, index) => {
                                    if (index === room.users.length - 1) {
                                        return (
                                            <Fragment key={user.id}>
                                                {user.username}{' '}
                                            </Fragment>
                                        );
                                    } else {
                                        return (
                                            <Fragment key={user.id}>
                                                {user.username} &{' '}
                                            </Fragment>
                                        );
                                    }
                                })}
                            <br />
                            {room.users.length < 1 && (
                                <Fragment>no players yet</Fragment>
                            )}
                        </h2>
                    )}
                </header>

                <main>
                    {!room.users.some(
                        user => user.username === props.username
                    ) && (
                        <Button variant="info" onClick={() => props.joinRoom()}>
                            Join
                        </Button>
                    )}
                    {room.users.length < 2 &&
                        room.users.some(
                            user => user.username === props.username
                        ) && <p>waiting for one more player</p>}
                    {room.users.length === 2 &&
                        room.status !== 'running' &&
                        room.status !== 'game is over' && (
                            <Button
                                variant="info"
                                onClick={() => {
                                    props.startGame();
                                }}
                            >
                                Start!
                            </Button>
                        )}
                    {(room.status === 'running' ||
                        room.status === 'game is over') &&
                        room.users.length === 2 && (
                            <Fragment>
                                <Flash>
                                    <Scoreboard
                                        players={room.users}
                                        winner={room.winner}
                                        startGame={props.startGame}
                                        endGame={props.endGame}
                                    />
                                </Flash>
                                <Game user={props.user} room={room} />
                            </Fragment>
                        )}
                </main>
            </Fragment>
        );
    }
}
