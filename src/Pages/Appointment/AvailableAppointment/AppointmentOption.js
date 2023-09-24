import React from 'react';

const AppointmentOption = ({ appointmentOption }) => {
    const { name, price, slots } = appointmentOption;

    return (
        <div className="card shadow-xl">
            <div className="card-body text-center ">
                <h2 className="text-2xl font-bold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available Now</p>
                <p><small>price:${price}</small></p>
                <div className="card-actions justify-center">

                    <label
                        disabled={slots.length === 0}
                        htmlFor="Booking-Modal"
                        className="btn btn-primary text-white"

                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;