import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

export const Usercard = props => {
    const getInitials = (string = '') => {
        const names = string.split(' ');
        const initials = names.map(name => name.charAt(0).toUpperCase())
        if (initials.length > 1) {
            return `${initials[0]}${initials[initials.length - 1]}`;
        }
        return initials[0];
    };

    return (
        <div className="user-card">
            <div className="user-card__header">
                <div className="user-card__header-avatar">{getInitials(props.name)}</div>
                <div className="user-card__header-title">
                    <p className="username">{props.name}</p>
                    <p>{new Date().toDateString()}</p>
                </div>
                <div className="user-card__header-navigate">
                    <Button
                        className="btn btn__primary"
                    >
                        <NavLink to="/dashboard">Back to Dashboard</NavLink>
                    </Button>

                </div>
            </div>
            <p className="user-card__about">At its core, Git is like a key value store. As the value is you content, the data that you want to save. The key is the hash of your data, like the unique id of what your content represent. You can then use the key to retrieve the content, like an id. To be precise, the key is a SHA1 of the data. SHA1 is a cryptographic hash function, which means that given the data, it will creates a 40-digit hexadecimal number (the ones you can see when you do git log). SHA1 function will guarantee same output for same input.</p>
            <div className="user-card__footer">
                <Button
                    className="btn btn__primary"
                >
                    <a href={`mailto:${props.email}`}>
                        send a mail
                    </a>
                </Button>
                <Button
                    className="btn btn__primary"
                >
                    <a href={`tel:${props.contact}`}>
                        call
                    </a>
                </Button>

            </div>
        </div>
    )
};

Usercard.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    contact: PropTypes.string,
}
