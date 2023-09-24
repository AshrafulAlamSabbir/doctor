import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Dashboard = () => {
    return (
        <section className='mt-32'
        // style={
        //     {
        //         background: `url(${appointment})`
        //     }
        // }
        >
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className='-mt-32 hidden lg:block lg:w-1/2 rounded-lg shadow-2x' />
                    <div className=''>
                        <h4 className=" text-lg text-secondary font-bold">Appointment</h4>
                        <h2 className='text-accent text-4xl font-bold'>Make an appointment Today</h2>
                        <p className="py-6 text-black">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                            that it has a more-or-less normal distribution of letters,
                            as opposed to using 'Content here, content here', making it look like readable English.
                            Many desktop publishing packages and web page</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;