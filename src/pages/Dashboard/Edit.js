import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import { FormInput, Loader } from 'components';
import PropTypes from 'prop-types';
import firebase from 'firedb';

const Edit = props => {
    const [state, setState] = useState({
        name: '',
        email: '',
        contact: '',
        key: '',
        isLoading: false,
        isSaving: false,
        error: '',
    })
    const { name, email, contact, key, isLoading, isSaving, error } = state;

    useEffect(() => {
        setState({ isLoading: true });
        const ref = firebase.firestore().collection('users').doc(props.match.params.id);
        ref.get().then((doc) => {
            setState({
                name: doc.data().name,
                email: doc.data().email,
                contact: doc.data().contact,
                key: doc.id,
                isLoading: false,
            });
        })
    }, [props.match.params.id])

    const handleChange = (e, attr) => {
        const { value } = e.target;
        const _state = { ...state };
        _state[attr] = value;
        setState(_state);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const editUserDispatcher = firebase.firestore().collection('users').doc(key);
        if (name && email && contact) {
            setState({ ...state, isSaving: true });
            editUserDispatcher.set({
                name,
                email,
                contact
            }).then(() => {
            setState({
                name: '',
                email: '',
                contact: '',
                key: '',
                isSaving: false
            });
            props.history.push("/dashboard")
            })
            .catch(() => {
                setState({ ...state, isSaving: false, error: "*Error updating user, please try again" });
            });
        } else {
            setState({ ...state, error: '*All fields are required' });
        }

    }

    return (
        <>
        {isLoading ? (
            <Loader />
            ) : (
            <div className="users create-user">
                <div className="users__table">
                    <div className="users__table-heading">
                        <h2 className="title">Edit User</h2>
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
            </div>)
        }
    </>
    );
};

export default Edit;

Edit.defaultProps = {
    match: {}
};

Edit.propTypes = {
    match: PropTypes.object,
}
