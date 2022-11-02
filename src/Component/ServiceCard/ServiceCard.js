import React from 'react';

const ServiceCard = ({service}) => {


    const {title, img, price} = service;
    return (
        
        <div className='card mx-auto'>
       <div>
       {/* TODO Height Card */}
       <img className='h-32 rounded-2xl' src={img} alt="" />
        <h3 className='text-red-600 font-semibold'>{price}</h3>
            <h1>{title}</h1>
       </div>
       <div> <button className='bg-red-600 rounded-md px-10 text-white mt-2'>Buy Now!</button></div>
        </div>

    );
};

export default ServiceCard;