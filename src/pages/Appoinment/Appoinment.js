import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppoinmentBanner from './AppoinmentBanner/AppoinmentBanner';
import AvailavilAppoinment from './AvailavilAppoinment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvailavilAppoinment date={date} setDate={setDate}></AvailavilAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;