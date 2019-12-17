import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import { FormInput } from 'components';
import firebase from '../../firebase';

const Create = props => {
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [contact, setContact] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    const firebaseController = firebase.firestore().collection('users');

    const handleChange = (e, attr) => {
        const { value } = e.target;
        setError('');
        if (attr === 'name') {
            setName(value);
        }
        if (attr === 'email') {
            const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            setEmailError(!email.match(regexEmail));
            setEmail(value);
        }
        if (attr === 'contact') {
            setContact(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            setError('*Name is required');
        } else if ((name && !email) || (name && emailError)) {
            setError('*Email field is empty or incorrect');
        } else if (!contact || contact.length < 10) {
            setError('*Phone Contact is missing or incomplete');
        } else {
            setIsSaving(true);
            firebaseController.add({
                name,
                email,
                contact
                }).then(() => {
                    setName('');
                    setEmail('');
                    setContact('');
                    setIsSaving(false);
                    props.history.push("/dashboard");
                })
                .catch(err => {
                    setError(err);
                    setIsSaving(false);
                });
        }
    }

return (
    <div className="users create-user">
        <div className="users__table">
            <div className="users__table-heading">
                <h2 className="title">Create User</h2>
                <div className="create-button">
                    <Button
                        className="btn btn__primary"
                    >
                        <NavLink to="/dashboard">
                            Back To Dashboard
                        </NavLink>
                    </Button>
                </div>
            </div>
            <Form onSubmit={e => e.preventDefault()} className="form__settings">
                <div className="row">
                <div className="col-md-12">
                    <FormInput
                        label="Name"
                        isRequired={true}
                        placeholder="Enter name"
                        type="text"
                        id="name"
                        value={name}
                        onChange={e => handleChange(e, 'name')}
                    />
                </div>
                <div className="col-md-12">
                    <FormInput
                        label="Email"
                        isRequired={true}
                        placeholder="Enter email address"
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => handleChange(e, 'email')}
                    />
                </div>
                <div className="col-md-12">
                    <FormInput
                        label="Contact"
                        isRequired={true}
                        placeholder="Enter phone contact (not less than 10 digits)"
                        type="number"
                        id="contact"
                        value={contact}
                        onChange={e => handleChange(e, 'contact')}
                    />
                </div>
                <div className="col-md-12 form-error">{error}</div>
                <div className="col-md-12">
                    <Button
                        className="btn btn__primary--outline"
                        block
                        id="submit"
                        disabled={isSaving}
                        onClick={handleSubmit}
                    >
                        {isSaving ? `Saving...` : `Save`}
                    </Button>
                </div>
                </div>
            </Form>
        </div>
    </div>
)};

export default Create;
