import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './form.css';

export default function SignUpForm(props) {
    return (
        <Fragment>
            <header>
                <h1>Sign up to play</h1>
                <Link to="/">Home</Link> | <Link to="/login">Login</Link>
            </header>

            <Form onSubmit={props.onSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        variant="info"
                        name="username"
                        value={props.values.username}
                        type="username"
                        onChange={props.onChange}
                        placeholder="Player name"
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        value={props.values.password}
                        type="password"
                        onChange={props.onChange}
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <Button variant="info" type="submit">
                    Submit
                </Button>
            </Form>
        </Fragment>
    );
}
