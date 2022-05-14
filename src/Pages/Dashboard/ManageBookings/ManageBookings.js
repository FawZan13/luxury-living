import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageBookings = () => {
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);
    const { user } = useAuth();

    const email = user.email;
    useEffect(() => {
        fetch(`https://lit-earth-64704.herokuapp.com/allOrders`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [control]);
    const handleDelete = (id) => {
        alert('Do you want to delete this item?');
        fetch(`https://lit-earth-64704.herokuapp.com/deleteOrder/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                    setControl(!control);
                }
            });
    };
    return (

        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {orders.map(order => <tr>

                        <td>{order.name}</td>
                        <td>${order.price}</td>
                        <td>{order.email}</td>
                        <td><Button onClick={() => handleDelete(order?._id)} variant="danger">Cancel</Button></td>
                    </tr>)}
                </tbody>
            </Table>
        </div>
    );
};

export default ManageBookings;