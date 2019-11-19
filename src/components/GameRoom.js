import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import MessageErrorNotFound from './MessageErrorNotFound';

export default function GameRoom(props) {
    console.log(props.room);
    return (
        <Fragment>
            {!props.room && <MessageErrorNotFound />}
            {props.room && (
                <header>
                    <h1>Game room: {props.room.name}</h1>
                    <Link to="/">Home</Link> | <Link to="/lobby">Lobby</Link>{' '}
                    <br />
                    <h2>
                        Users:{' '}
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
                </header>
            )}
            <main>
                <img
                    alt="placeholder"
                    src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_400/https://www.testingxperts.com/wp-content/uploads/2019/02/placeholder-img.jpg"
                />
                {props.room.users.length < 2 && (
                    <Button
                        variant="info"
                        type="submit"
                        onClick={() => props.joinRoom()}
                    >
                        Join
                    </Button>
                )}
                {props.room.users.length === 2 && (
                    <Button
                        variant="info"
                        type="submit"
                        onClick={() => props.startGame()}
                    >
                        Start the game!
                    </Button>
                )}
            </main>
        </Fragment>
    );
}
