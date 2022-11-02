import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='mt-10 mb-10'>
            <div className="card lg:card-side  bg-base-100 shadow-xl">
                <figure className='relative'>
                <img className='w-52 h-52' src={person} alt="Album" />
                <img className='absolute w-36 h-36 ml-36 mt-52 rounded-sm shadow-md' src={parts} alt="Album" />
                </figure>


 
                <div className="card-body ml-10">
                    <p className='text-red-500 font-semibold'>About US</p>
                    <h2 className="font-bold">We are qualified & of experience in this field</h2>
                    <p className='font-thin'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='font-thin'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div className="card-actions justify-stat">
                        <button className="btn border-none mt-2 py-3 bg-red-600">Give me Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;