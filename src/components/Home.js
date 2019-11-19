import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './home.css';
class Home extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <h1>My game</h1>
                    <h2>
                        lorem ipsum about this game
                        <br />i hate writing descriptions
                    </h2>
                </header>
                <main>
                    <img
                        alt="placeholder"
                        src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_400/https://www.testingxperts.com/wp-content/uploads/2019/02/placeholder-img.jpg"
                    />
                    {this.props.user && (
                        <Link className="btn btn-info" to="/lobby">
                            Lobby
                        </Link>
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

export default connect(mapStateToProps, {})(Home);
