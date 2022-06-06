import React from 'react';
import Banner from './Banner';

import Footer from '../Shared/Footer';


import CustomerRatings from '../Shared/CustomerRatings';
import Stats from './Stats';
import Products from '../MainProduct/Products';
import TestModal from '../MainProduct/TestModal';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Products></Products>
            <CustomerRatings></CustomerRatings>
            <Stats></Stats>
            <Footer></Footer>

        </div>
    );
};

export default Home;