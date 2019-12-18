/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import React, { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import firebase from 'firedb';
import {
  Loader,
} from 'components';
import authContext from 'contexts/AuthContext';

const AllUSers = props => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setIsLoggedIn } = useContext(authContext);

  useEffect(() => {
    setLoading(true);
    const fetchUsers = firebase.firestore().collection('users')
    const collections = querySnapshot => {
        const _users = [];
        querySnapshot.forEach(user => {
            const { name, email, contact } = user.data();
            _users.push({
                id: user.id,
                user,
                name,
                email,
                contact,
            })
        });
        setUsers(_users);
        setLoading(false);
    }
    fetchUsers.onSnapshot(collections);
  }, []);

  const handleDelete = id => {
      let confirmation = window.confirm("Are you sure you want to remove this user?");
      if (confirmation) {
        firebase.firestore().collection('users').doc(id).delete()
            .catch(() => alert("An error was encountered while removing this user, please try again"));
      }
  }

  const handleSignOut = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        localStorage.removeItem("user");
        window.location.href = "/";
        setIsLoggedIn(false);
      }).catch(err => {
        // An error happened.
        console.log(err);
        alert('Error: failed to signout user');
      });
  };

  return (
      <>
        {loading ? (
            <Loader />
            ) : (
                <div className="users">
                    <div className="users__table">
                        {!users.length ? (
                            <div className="empty-screen">
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
                                <th className="table-head">Contact</th>
                                <th className="table-head">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {users.map(selected => {
                                const { id, status, name, email, contact} = selected;
                                return (
                                    <tr
                                        className={status ? 'deactivated' : ''}
                                        key={id}
                                        id={id}
                                    >
                                        <td className="table-cell">{name}</td>
                                        <td className="table-cell">{email}</td>
                                        <td className="table-cell">{contact}</td>
                                        <td className="table-cell">
                                            <span className="table-cell__icon">
                                                <NavLink to={`/dashboard/user/${id}`}>
                                                    <i
                                                        className="far fa-eye"
                                                    />
                                                </NavLink>
                                            </span>
                                            <span className="table-cell__icon">
                                                <NavLink to={`/dashboard/edit/${id}`}>
                                                    <i
                                                        className="far fa-edit"
                                                    />
                                                </NavLink>
                                            </span>
                                            <span className="table-cell__icon delete">
                                                <i
                                                    onClick={() => handleDelete(id)}
                                                    className="fa fa-trash"
                                                    aria-hidden="true"
                                                />
                                            </span>

                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        </table>
                    </>
                    )}
                </div>
                <Button
                    className="btn btn__primary signout"
                    onClick={handleSignOut}
                >
                    sign out
                </Button>
            </div>
        )}
    </>
  );
}
export default AllUSers;
