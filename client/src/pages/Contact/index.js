import React, { useState } from 'react';
import { validateEmail } from '../../utils/validateemail';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email address is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <Container>
            <section>
                <h1 className="contact-me">Contact Me</h1>
                <Form id="contact-form" onSubmit={handleSubmit}>
                    {/* <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                    </div> */}
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control defaultValue={name} onBlur={handleChange} name="name" />
                    </Form.Group>
                    {/* <div>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                    </div> */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" defaultValue={email} onBlur={handleChange} name="email" />
                    </Form.Group>
                    {/* <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                    </div> */}
                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" name="message" defaultValue={message} onBlur={handleChange} rows={4} />
                    </Form.Group>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <Button className="submit-btn" variant="primary" type="submit">submit</Button>
                </Form>
            </section>
        </Container>
    );
}
