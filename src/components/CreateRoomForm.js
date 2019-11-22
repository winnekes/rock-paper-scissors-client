import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function CreateRoomForm(props) {
    return (
        <Form onSubmit={props.onSubmit}>
            <Form.Group controlId="formBasicName">
                <Form.Label>Create your own game room!</Form.Label>
                <Form.Control
                    variant="info"
                    name="name"
                    value={props.values.name}
                    type="name"
                    onChange={props.onChange}
                    placeholder="Room name"
                    maxlength="10"
                    required
                />
            </Form.Group>
            <Button variant="info" type="submit">
                Submit
            </Button>
        </Form>
    );
}
