/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import React, { useState, useContext } from 'react';
import { Form, Button } from 'reactstrap';
import { FormInput } from 'components';
import authContext from 'contexts/AuthContext';
import firebase from 'firedb';

const Home = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const { setIsLoggedIn } = useContext(authContext);

  const goForward = () => {
      if (password && email) {
        setIsSaving(true);
        setError('');
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            // Handle Successful sign in here.
            setIsSaving(false);
            setIsLoggedIn(true);
            // window.location.href = "/dashboard";
        })
        .catch(err => {
            // Handle Errors here.
            setError(err.code);
            setIsSaving(false);
          });
    } else {
        setError('*Both fields are required');
    }
  };

  const handleChange = (e, attr) => {
      const { value } = e.target;
      setError('');
      attr === 'password' ? setPassword(value) : setEmail(value);
  }

  return (
  <div className="login">
      <div className="login-form">
        <h1 className="login-form__heading">Login</h1>
            <Form onSubmit={e => e.preventDefault()} className="form__settings">
                <div className="row">
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
                        label="Password"
                        isRequired={true}
                        placeholder="Enter password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => handleChange(e, 'password')}
                    />
                </div>
                <div className="col-md-12 form-error">{error}</div>
                <div className="col-md-12">
                    <Button
                        className="btn btn__primary--outline"
                        block
                        id="submit"
                        disabled={isSaving}
                        onClick={goForward}
                    >
                                {isSaving ? `Signing in..` : `Sign in`}
                    </Button>
                </div>
                </div>
            </Form>
      </div>
  </div>
  );
}
export default Home;
