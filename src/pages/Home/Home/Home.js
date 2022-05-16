import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Info from '../CardInfo/Info';
import Form from '../Form/Form';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import Testomonials from '../Testomonials/Testomonials';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppoinment></MakeAppoinment>
            <Testomonials></Testomonials>
            <Form></Form>
            <Footer></Footer>
        </div>
    );
};

export default Home;