import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/Home';
import SignUpFormContainer from './components/SignUpFormContainer';
import LoginFormContainer from './components/LoginFormContainer';
import LobbyContainer from './components/LobbyContainer';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Container className="main-container">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={LoginFormContainer} />
                    <Route
                        exact
                        path="/signup"
                        component={SignUpFormContainer}
                    />
                    <Route exact path="/lobby" component={LobbyContainer} />
                </Container>
            </Provider>
        );
    }
}

export default App;
