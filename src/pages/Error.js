import React from 'react';
import { Button } from 'reactstrap';

const ErrorPage = props => {
  const goHome = () => {
    props.history.push('/');
  };

  return (
    <div className="container">
      <div className="">
        <img loading="lazy" src={'https://picsum.photos/400'} alt="404 Error" className="img-fluid" />
      </div>
      <div className="">
        <h3 className="">We couldn’t find the page</h3>
        <p className="">
          This page was not found. You may have mistyped the address or the
          page may have moved.
        </p>
      </div>
        <Button
            className="btn btn__primary--outline"
            block
            onClick={goHome}
        >
            go back
        </Button>
    </div>
  );
};

export default ErrorPage;
