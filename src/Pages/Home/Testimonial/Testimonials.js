import React from 'react';

const Testimonials = ({ review }) => {
    const { name, img, location, reviews } = review;
    return (
        <div className="card shadow-xl">
            <div className="card-body">

                <p>{reviews}</p>
                <div className="flex items-center mt-6">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h5 className='text-lg'>{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;