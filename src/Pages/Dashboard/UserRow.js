import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, serial }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5001/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <tr>
            <th>{serial + 1}</th>
            <td>{email}</td>
            <td>{role === 'admin' && <button className="btn btn-xs">Admin</button>}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="badge btn-outline badge-s">Make Admin</button>}</td>
        </tr >
    );
};

export default UserRow;