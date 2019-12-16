import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import { FormInput } from 'components';
import firebase from '../../firebase';

const Create = props => {
    const [state, setState] = useState({
        name: '',
        email: '',
        contact: '',
        error: '',
    })
    const { name, email, contact, error } = state;
    const firebaseController = firebase.firestore().collection('boards');
    const handleChange = (e, attr) => {
        const { value } = e.target;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        firebaseController.add({
        name,
        email,
        contact
        }).then((docRef) => {
        setState({
            name: '',
            email: '',
            contact: ''
        });
        props.history.push("/")
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

return (
    <div className="users">
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
                        onClick={handleSubmit}
                    >
                        Sign in
                    </Button>
                </div>
                </div>
            </Form>
        </div>
    </div>
)};

export default Create;
