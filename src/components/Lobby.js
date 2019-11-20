import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import CreateRoomContainer from './CreateRoomContainer';
import MessageLoading from './MessageLoading';

import './lobby.css';

export default function Lobby(props) {
    return (
        <Fragment>
            <header>
                <h1>Game lobby</h1>
                <Link to="/">Home</Link> | <Link to="/lobby">Lobby</Link>
            </header>
            <main>
                {!props.rooms && <MessageLoading />}
                {props.rooms.length > 0 && (
                    <Fragment>
                        <h2>Current Games</h2>
                        {props.rooms.map(room => (
                            <p className="room" key={room.id}>
                                <Link to={`/room/${room.name}`}>
                                    {room.name}
                                </Link>{' '}
                                <br />
                                Players: {room.users.length}
                                <br />
                                Status: {room.status}
                            </p>
                        ))}
                    </Fragment>
                )}
                <hr />
                <CreateRoomContainer />
            </main>
        </Fragment>
    );
}
