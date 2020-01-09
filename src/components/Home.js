import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/user';
import './styles/home.css';
import Tada from 'react-reveal/Tada';
class Home extends Component {
    render() {
        return (
            <Fragment>
                <header className="home">
                    <Tada>
                        <h1>Rock, Paper, Scissors!</h1>
                    </Tada>
                    <p className="description">
                        Schnick, schnack, schnuck or ching chong cha - there are
                        many names for this beloved game.{' '}
                    </p>
                    <img
                        className="mainImg"
                        alt="placeholder"
                        src="https://image.freepik.com/free-vector/two-girls-playing-paper-scissors-rock_1308-34197.jpg"
                    />
                    <h2>
                        <p className="description">
                            Do you have a score to settle? Decide on who has to
                            do the dishes? Hope to get to watch your favourite
                            film?
                        </p>
                        <p className="description">
                            Then please play my awesome game!
                        </p>
                    </h2>
                </header>
                <main>
                    {this.props.user && (
                        <nav>
                            <Link className="btn btn-info" to="/lobby">
                                Lobby
                            </Link>

                            <Link
                                className="btn btn-info"
                                to="/"
                                onClick={() => this.props.dispatch(logout())}
                            >
                                Logout
                            </Link>
                        </nav>
                    )}

                    {!this.props.user && (
                        <nav>
                            <Link className="btn btn-info" to="/signup">
                                Sign Up
                            </Link>

                            <Link className="btn btn-info" to="/login">
                                Login
                            </Link>
                        </nav>
                    )}
                </main>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return { user: state.user };
}

export default connect(mapStateToProps)(Home);
