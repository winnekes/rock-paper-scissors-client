import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
export default function SignUpForm(props) {
    return (
        <Fragment>
            <header>
                <h1>Sign up to play</h1>
                <Link to="/">Home</Link> | <Link to="/login">Login</Link>
            </header>
            <main>
                <form onSubmit={props.onSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={props.values.email}
                        onChange={props.onChange}
                    ></input>
                    <input
                        type="username"
                        name="username"
                        placeholder="username"
                        value={props.values.username}
                        onChange={props.onChange}
                    ></input>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={props.values.password}
                        onChange={props.onChange}
                    ></input>
                    <button type="submit">sign up now</button>
                </form>
            </main>
        </Fragment>
    );
}
