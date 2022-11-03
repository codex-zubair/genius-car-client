import React from 'react';

const OrderRow = ({ order }) => {

    const { serviceName, price, email, customer } = order;
    return (
        <tr>
            <th>
                    <label>
                        <button>X</button>
                    </label>
                
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
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