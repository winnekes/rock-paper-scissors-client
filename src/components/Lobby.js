import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import CreateRoomContainer from './CreateRoomContainer';
import MessageLoading from './MessageLoading';
import { logout } from '../actions/user';

import './styles/lobby.css';

export default function Lobby(props) {
    return (
        <Fragment>
            <header>
                <h1>Game lobby</h1>
                <Link to="/">Home</Link> | <Link to="/lobby">Lobby</Link> |{' '}
                <Link to="/" onClick={() => props.dispatch(logout())}>
                    Logout
                </Link>
            </header>
            <main>
                {!props.rooms && <MessageLoading />}
                {props.rooms.length > 0 && (
                    <Fragment>
                        <h4>
                            Welcome, {props.username}! Join a room or create
                            one!{' '}
                        </h4>
                        <h2>Current Games</h2>
                        {props.rooms.map(room => {
                            if (room.users.length > 1) {
                                return (
                                    <p className="room" key={room.id}>
                                        <span>{room.name}</span>
                                        <br />
                                        This room is full. <br />
                                        Maybe join a different one?
                                    </p>
                                );
                            } else {
                                return (
                                    <p className="room" key={room.id}>
                                        <Link to={`/room/${room.name}`}>
                                            <span>{room.name}</span>
                                        </Link>
                                        <br />
                                        Players: {room.users.length}/2
                                        <br />
                                        Status: {room.status}
                                    </p>
                                );
                            }
                        })}
                    </Fragment>
                )}
                <hr />
                <CreateRoomContainer />
            </main>
        </Fragment>
    );
}
