import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/styles/forms.css';

import Home from './components/Home';
import SignUpFormContainer from './components/SignUpFormContainer';
import LoginFormContainer from './components/LoginFormContainer';
import LobbyContainer from './components/LobbyContainer';
import GameRoomContainer from './components/GameRoomContainer';

import { baseUrl } from './constants';

class App extends Component {
    stream = new EventSource(`${baseUrl}/stream`);

    componentDidMount = () => {
        this.stream.onmessage = event => {
            const { data } = event;
            const parsedData = JSON.parse(data);
            this.props.dispatch(parsedData);
        };
    };

    render() {
        return (
            <Container className="main-container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={LoginFormContainer} />
                    <Route
                        exact
                        path="/signup"
                        component={SignUpFormContainer}
                    />
                    <Route exact path="/lobby" component={LobbyContainer} />

                    <Route path="/room/:name" component={GameRoomContainer} />
                    <Route path="*" component={LobbyContainer} />
                </Switch>
            </Container>
        );
    }
}

export default connect()(App);
