/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Form, Button } from 'reactstrap';
import { FormInput } from 'components';

const Home = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('welcome to my app');
    // this.props.history.push('/login');
  }, []);

  const goForward = () => {
    if (!name) {
        setError('*Name is required');
    } else if (name && !email) {
        setError('*Email address is required');
    } else if (name && email && !emailError) {
        setError('');
        const user = { name, email };
        localStorage.setItem('user', JSON.stringify(user));
        props.history.push('/dashboard');
    } else {
        setError('*Please enter a valid email address');
    }
  };

  const handleChange = (e, attr) => {
      const { value } = e.target;
      setError('');
      if (attr === 'name') {
          setName(value);
      } else {
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setEmailError(!email.match(regexEmail));
        setEmail(value);
      }
  }
  return (
  <div className="login">
      <div className="login-form">
        <h1 className="login-form__heading">Home</h1>
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
                <div className="col-md-12 form-error">{error}</div>
                <div className="col-md-12">
                    <Button
                        className="btn btn__primary--outline"
                        block
                        id="submit"
                        onClick={goForward}
                    >
                        Sign in
                    </Button>
                </div>
                </div>
            </Form>
      </div>
  </div>
  );
}
export default Home;
