import React from 'react';
import doctor from "../../../assets/images/doctor.png"
import appointment from "../../../assets/images/appointment.png";
import MainButton from '../../Shared/MainButton/MainButton';

const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className="mt-[-120px]" src={doctor} alt="" />
            </div>       
            <div className='flex-1 p-10'>
                <p className='text-primary font-bold'>Appointment</p>
                <h3 className='text-3xl my-4 text-white'>Make an appointment Today</h3>
                <p className='mb-3 text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <MainButton>Get started</MainButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;