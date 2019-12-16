/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

const AllUSers = (props) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('all users list');
    // this.props.history.push('/login');
  }, []);

  return (
    <div className="users">
        <div className="users__table">
            {!users.length ? (
            <div className="settings__empty settings__empty-onboarding">
                <p>No user created yet</p>
                <Button
                    className="btn btn__primary"
                >
                    <NavLink to="/dashboard/create">
                        create a user
                    </NavLink>
                </Button>
            </div>
            ) : (
            <>
                <div className="users__table-heading">
                    <h2 className="title">all users</h2>
                    <div className="create-button">
                        <Button
                            className="btn btn__primary"
                        >
                            <NavLink to="/dashboard/create">
                                create a user
                            </NavLink>
                        </Button>
                    </div>
                </div>
                <table className="table">
                <thead className="table-header">
                    <tr>
                        <th className="table-head">Name</th>
                        <th className="table-head">Email</th>
                        <th className="table-head">Status</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {users.map(selected => {
                        const { _id, status, name, email, contact} = selected;
                        return (
                            <tr
                                className={status ? 'deactivated' : ''}
                                key={_id}
                                id={_id}
                            >
                                <td className="table-cell">
                                    <NavLink to={`/dashboard/user/${_id}`}>{name}</NavLink>
                                </td>
                                <td className="table-cell">{email}</td>
                                <td className="table-cell">{contact}</td>
                                <td className="table-cell">{status ? 'Active': 'Deactivated'}</td>
                            </tr>
                        );
                    })}
                </tbody>
                </table>
            </>
            )}
        </div>
    </div>
  );
}
export default AllUSers;
