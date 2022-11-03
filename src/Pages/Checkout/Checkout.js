import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Checkout = () => {
    // taking information from the database
    const { title, price,_id } = useLoaderData();

    // Taking user Login info from auth context
    const {user} = useContext(AuthContext);

    // Placing order submitButton.
    const placeOrder =(event)=> 
    {
        event.preventDefault();

        const form = event.target;
        const name = `${form.firstName.value}  ${form.lastName.value}`;
        const email = user?.email ||'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        // Full order that will be post / Create into database.
        const orderItemID = {
            service: _id,
            serviceName: title,
            price,
            phone,
            message,
            customer: name
        }
    }


    return (
        <div className='text-center'>
            <h2>you are about to order {title}</h2>
            <h2>you are about to order {price}</h2>
            <form onClick={placeOrder}>
                <div  className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full max-w-xs" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
                    <input name='phone' type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                    <input name='email' type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <textarea name='message' className="textarea w-full mt-5 border" placeholder="Order Extra Information"></textarea>
                    <button className='px-11 my-2 border-none rounded-sm hover:bg-red-500 text-white bg-red-600' type='submit'>Submit</button>
                </div>
            </form>

        </div>
    );
};

export default Checkout;