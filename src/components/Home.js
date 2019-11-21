import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/user';
import './styles/home.css';
class Home extends Component {
    render() {
        return (
            <Fragment>
                <header className="pulse">
                    <h1>Rock, Paper, Scissors!</h1>
                    <h2>
                        <p>
                            My game skills are not good, neither is my writing
                            descriptions
                        </p>
                    </h2>
                </header>
                <main>
                    <img
                        alt="placeholder"
                        src="https://image.freepik.com/free-vector/two-girls-playing-paper-scissors-rock_1308-34197.jpg"
                    />
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
