import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import OrderRow from './OrderRow/OrderRow';

const Orders = () => {

    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    // dynamically query system
    const url = `http://localhost:5000/orders?email=${user?.email}`;


    // it will hit the useEffect when we will get the user EMAIL
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
            .catch(error => console.log(error));
    }, [user?.email])



    // Order will be deleted from here
    const handleDelete = (id, serviceName) => {
        const proceed = window.confirm("do you want to delete? " + serviceName)


      
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    console.log("working")
                    if(data.deletedCount > 0)
                    {
                        const remaining = orders.filter(ord=> ord._id !== id);
                        setOrders(remaining);
                    }
                });
        }
    }

    return (
        <div>
            <h2 className="text-5xl mb-5">you have {orders.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Name</th>
                            <th>Services</th>
                            <th>Vat</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {orders.map(order => <OrderRow  key={order._id} order={order} handleDelete= {handleDelete}></OrderRow>)}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Orders;