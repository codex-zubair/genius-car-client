import React from 'react';

const ServiceCard = ({service}) => {


    const {title, img, price,service_id} = service;
    return (
        
        <div className='card'>
       <div>
       <img className='h-32' src={img} alt="" />
        <h3 className='text-red-600 font-semibold'>{price}</h3>
            <h1>{title}</h1>
       </div>
       <div> <button className='bg-red-600 rounded-md px-10 text-white mt-2'>Buy Now!</button></div>
        </div>

    );
};

export default ServiceCard;