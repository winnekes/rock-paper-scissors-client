import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm(props) {
    return (
        <Fragment>
            <header>
                <h1>Login</h1>
                <Link to="/">Home</Link> | <Link to="/signup">Sign up</Link>
            </header>
            <form onSubmit={props.onSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={props.values.url}
                    onChange={props.onChange}
                ></input>
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={props.values.password}
                    onChange={props.onChange}
                ></input>
                <button type="submit">Login now</button>
            </form>
        </Fragment>
    );
}
