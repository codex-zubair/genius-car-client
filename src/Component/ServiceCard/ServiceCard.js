import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {


    const {title, img, price,_id} = service;
    return (
        
        <div className='card mx-auto'>
       <div>
       {/* TODO Height Card */}
       <img className='h-32 rounded-2xl' src={img} alt="" />
        <h3 className='text-red-600 font-semibold'>{price}</h3>
            <h1>{title}</h1>
       </div>
       <div> 
       <Link to={`/checkout/${_id}`}  className='bg-red-600 rounded-md px-10 text-white mt-2'>Buy Now!</Link>
       </div>
        </div>

    );
};

export default ServiceCard;