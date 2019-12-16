import React from 'react'
import spinner from 'assets/img/spinner.gif';

export const Loader = () => {
    return (
        <div className="page-loader">
            <div className="page-loader__spinner">
                <img src={spinner} alt="page loader" />
            </div>
        </div>
    )
}
