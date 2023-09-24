import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    //  const [treatment, setTreatment] = useState(null);
    //  const date = format(selectedDate, 'PP');

    useEffect(() => {
        fetch('appointmentOption.json')

            .then(res => res.json())

            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Services on :{format(selectedDate, 'PP')}</p>
            <div className='grid mt-10 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}

                    ></AppointmentOption>)
                }
            </div>

        </section>
    );
};

export default AvailableAppointment;