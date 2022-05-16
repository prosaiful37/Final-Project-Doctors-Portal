import React from 'react';
import CardInfo from './CardInfo';
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <CardInfo  cardDescription="24/7 Hours everyday opening" card cardTitle="Opening Hours" img={clock} bgClass="bg-gradient-to-r from-secondary  to-primary"></CardInfo>
            <CardInfo cardDescription="Brooklyn, NY 10036, United States" card cardTitle="Visit our location" img={marker} bgClass="bg-accent"></CardInfo>
            <CardInfo cardDescription="+000 123 456789" card cardTitle="Contact us now" img={phone} bgClass="bg-gradient-to-r from-secondary  to-primary"></CardInfo>
        </div>
    );
};

export default Info;