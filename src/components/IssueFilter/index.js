import React, { Fragment } from 'react';
import { Form } from 'react-bootstrap';

export const IssueFilter = ({text, handleChange }) => {
    return (
        <Fragment>
            <Form.Group controlId={"id"}>
                <Form.Control
                    text={text}
                    type="text"
                    placeholder="Filter Issues..."
                    value={text}
                    onChange={(e) => handleChange(e.target.value)}
                    required />
            </Form.Group>
        </Fragment>
    );
}
