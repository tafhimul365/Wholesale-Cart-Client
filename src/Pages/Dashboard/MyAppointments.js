import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyAppointments = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5001/orders?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data);
                });
        }
    }, [user])

    return (
        <div>
            <h2 className='flex text-2xl font-mono justify-center'>You have {orders.length} unpaid orders in your cart </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='flex text-2xl font-mono justify-center mb-1'>Dashboard</th>
                        </tr>
                    </thead>

                </table>
            </div>



            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>

                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.title}</td>
                                <td>{a.ordrerQuantity}</td>
                                <td><button className="badge btn-outline badge-s">Pay</button></td>
                                <td><button className="btn btn-xs">Unpaid</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyAppointments;