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
                console.log(data);
            })
            .catch(error => console.log(error));
    }, [user?.email])

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

                        {orders.map(order=> <OrderRow key={order._id} order= {order}></OrderRow>)}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Orders;