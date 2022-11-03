import React, { useEffect, useState } from 'react';

const OrderRow = ({ order , handleDelete}) => {

    const { serviceName, price, customer, _id } = order;

    // set Services by calling the API
    const [service, setService] = useState([]);


    // fetching // Calling the services by each id of services.
    useEffect(() => {
        fetch(`http://localhost:5000/checkout/${_id}`)
            .then(res => res.json())
            .then(service => setService(service))
            .catch(error => console.log(error))
    }, [_id])


  



    return (
        <tr>
            <th>
                <label>
                    <button onClick={()=> handleDelete(_id,serviceName)} className='btn btn-ghost'>X</button>
                </label>

            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask w-12 h-12">
                            <img src={service?.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />

            </td>
            <td>NONE</td>
            <th>
                <button className="btn btn-ghost btn-xs">    <span className="badge badge-ghost badge-sm">{price}</span></button>
            </th>
        </tr>
    );
};

export default OrderRow;