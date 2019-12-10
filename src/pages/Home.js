import React, { useEffect } from 'react';

const Home = (props) => {
  useEffect(() => {
    console.log('welcome to my app');
    // this.props.history.push('/login');
  }, []);

  const goForward = () => {
    props.history.push('/dashboard');
  };

  return (
  <div className="container">
    <p>Home</p>
    <button className="btn btn__primary--outline" onClick={() => goForward()}>
      GO FORWARD
    </button>

  </div>
  );
}
export default Home;
