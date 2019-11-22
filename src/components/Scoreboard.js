import React, { Fragment } from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import Tada from 'react-reveal/Tada';

import './styles/scoreboard.css';

import UIfx from 'uifx';
import startGame from './sounds/start_game.mp3';

const beep = new UIfx(startGame, { volume: 0.4, throttleMs: 100 });
let soundPlayed = false;
function playSound() {
    if (!soundPlayed) {
        beep.play();
        soundPlayed = true;
    }
}
export default function Scoreboard(props) {
    return (
        <Jumbotron className="scoreboard" fluid>
            {/*     {playSound()} */}
            <Container>
                <div className="players">
                    {props.players.map(player => (
                        <div className="player" key={player.id}>
                            <h4>{player.username}</h4>
                            Points: {player.points}
                        </div>
                    ))}
                </div>
                {props.winner !== 'no winner' && (
                    <Fragment>
                        <h3>
                            the winner is: <Tada>{props.winner}</Tada>
                        </h3>
                        <Button
                            variant="info"
                            onClick={() => props.startGame()}
                        >
                            Play another round?
                        </Button>
                        <Button
                            variant="danger"
                            onClick={() => props.endGame()}
                        >
                            End game and back to lobby
                        </Button>
                    </Fragment>
                )}
            </Container>
        </Jumbotron>
    );
}
