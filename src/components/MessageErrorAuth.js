import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function MessageErrorAuth() {
    return (
        <Fragment>
            <header>
                <h1>Authentication error</h1>
                <Link to="/">Home</Link> | <Link to="/login">Login</Link>
            </header>
            <main>
                <p>Please login to access my awesome game!</p>
            </main>
        </Fragment>
    );
}
