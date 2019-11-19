import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function MessageLoading() {
    return (
        <Fragment>
            <header>
                <h1>Loading ....</h1>
                <Link to="/">Home</Link> | <Link to="/login">Login</Link>
            </header>
        </Fragment>
    );
}
