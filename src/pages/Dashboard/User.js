import React, { useState, useEffect } from 'react';
import { Usercard } from 'components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import firebase from '../../firebase';

const User = props => {
    const [state, setState] = useState({
        currentUser: {},
        isLoading: false,
        error: false,
    })
    const { currentUser, isLoading, error } = state;

    useEffect(() => {
        setState({ isLoading: true });
        const ref = firebase.firestore().collection('users').doc(props.match.params.id);
        ref.get().then((doc) => {
          if (doc.exists) {
            setState({
              currentUser: doc.data(),
              isLoading: false,
              error: false
            });
          } else {
            setState({ isLoading: false, error: true });
          }
        });
    }, [props.match.params.id])

    return (
        <div className="users">
            {isLoading ? (
                    <h1>Loading...</h1>
                ) : error ? (
                    <h1>No User Found, please go back</h1>
                ) : (
                    <Usercard { ...currentUser } />
                )}
        </div>
    )
};

export default withRouter(User);

User.defaultProps = {
    match: {}
};

User.propTypes = {
    match: PropTypes.object,
}
