import React from 'react';
import { Button } from 'reactstrap';

const ErrorPage = props => {
  const goHome = () => {
    props.history.push('/');
  };

  return (
    <div className="dashboard error-page">
      <div className="error-page__tile">
        <img src={'https://picsum.photos/400'} alt="404 Error" className="img-fluid" />
      </div>
      <div className="error-page__main">
        <h3 className="title">We couldn’t find the page</h3>
        <p className="subtitle">
          This page was not found. You may have mistyped the address or the
          page may have moved.
        </p>
      </div>
      <div className="error-page__action">
        <Button
            className="btn btn__primary--outline"
            block
            onClick={goHome}
        >
            go to dashboard
        </Button>
       </div>
    </div>
  );
};

export default ErrorPage;
