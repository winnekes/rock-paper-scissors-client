import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CreateRoomContainer from './CreateRoomContainer';

export default function Lobby(props) {
    return (
        <Fragment>
            <header>
                <h1>Game lobby</h1>
                <Link to="/">Home</Link> | <Link to="/lobby">Lobby</Link>
            </header>
            <main>
                <CreateRoomContainer />
                {!props.rooms && <p>Loading</p>}
                {props.rooms.length > 1 &&
                    props.rooms.map(room => (
                        <Link key={room.id} to={`/rooms/${room.name}`}>
                            <p>{room.name}</p>
                        </Link>
                    ))}
            </main>
        </Fragment>
    );
}
