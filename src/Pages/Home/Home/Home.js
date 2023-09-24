import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Terms from '../Terms/Terms';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Footer from '../../Shared/Footer/Footer';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-6'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Terms></Terms>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;