import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import CreateRoomContainer from './CreateRoomContainer';
import Loading from './Loading';

export default function Lobby(props) {
    return (
        <Fragment>
            <header>
                <h1>Game lobby</h1>
                <Link to="/">Home</Link> | <Link to="/lobby">Lobby</Link>
            </header>
            <main>
                {!props.rooms && <Loading />}
                {props.rooms.length > 1 && (
                    <Fragment>
                        <h2>Current games</h2>
                        {props.rooms.map(room => (
                            <p>
                                <Link
                                    key={room.id}
                                    to={`/room/${room.name}`}
                                    onClick={() => props.selectRoom(room.name)}
                                >
                                    {room.name}
                                </Link>{' '}
                                <br />
                                Players: {room.users.length}
                                <br />
                                Status:
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
