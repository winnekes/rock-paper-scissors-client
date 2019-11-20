import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

import './scoreboard.css';

export default function Scoreboard(props) {
    console.log(props);
    return (
        <Jumbotron className="scoreboard" fluid>
            <Container>
                <h3>Scoreboard</h3>
                <div className="players">
                    {props.players.map(player => (
                        <div className="player" key={player.id}>
                            <h4>{player.username}</h4>
                            <p>Points: {player.points}</p>
                            {player.turn && <p>playing now</p>}
                        </div>
                    ))}
                </div>
            </Container>
        </Jumbotron>
    );
}
