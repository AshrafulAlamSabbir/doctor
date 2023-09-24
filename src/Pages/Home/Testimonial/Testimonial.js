import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Testimonials from './Testimonials';
const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Rodrigo',
            img: people1,
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'madrid'
        },
        {
            _id: 2,
            name: 'Ronald',
            img: people2,
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'madrid'
        },
        {
            _id: 3,
            name: 'sanga',
            img: people3,
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'madrid'
        },
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font bold '>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-16 lg:w-36' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid mt-10 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Testimonials
                        key={review._id}
                        review={review}
                    ></Testimonials>)
                }
            </div>
        </section>
    );
};

export default Testimonial;