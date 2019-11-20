import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import MessageErrorNotFound from './MessageErrorNotFound';
import Scoreboard from './Scoreboard';

export default function GameRoom(props) {
    return (
        <Fragment>
            {!props.room && <MessageErrorNotFound />}
            {props.room && (
                <header>
                    <h1>Game room: {props.room.name}</h1>
                    <Link to="/">Home</Link> | <Link to="/lobby">Lobby</Link>{' '}
                    <br />
                    {props.room.status !== 'running' && (
                        <h2>
                            Players:{' '}
                            {props.room.users.length > 0 &&
                                props.room.users.map((user, index) => {
                                    if (index === props.room.users.length - 1) {
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
                                })}{' '}
                            <br />
                            {props.room.users.length < 1 && (
                                <Fragment>none</Fragment>
                            )}
                        </h2>
                    )}
                </header>
            )}
            <main>
                {props.room && props.room.status === 'running' && (
                    <Scoreboard players={props.room.users} />
                )}
                <img
                    alt="placeholder"
                    src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_400/https://www.testingxperts.com/wp-content/uploads/2019/02/placeholder-img.jpg"
                />
                {props.room && props.room.users.length < 2 && (
                    <Button variant="info" onClick={() => props.joinRoom()}>
                        Join
                    </Button>
                )}
                {props.room &&
                    props.room.users.length === 2 &&
                    props.room.status !== 'running' && (
                        <Button
                            variant="info"
                            onClick={() => props.startGame()}
                        >
                            Start the game!
                        </Button>
                    )}
                {props.room && props.room.status === 'running' && (
                    <Button variant="info" onClick={() => props.changeTurn()}>
                        Change turn
                    </Button>
                )}
            </main>
        </Fragment>
    );
}
