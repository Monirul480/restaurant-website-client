import React from 'react';
import Banner from '../componentes/Banner/Banner';
import CardShef from '../componentes/CardShef/CardShef';
import HistoryRecipy from '../componentes/CardShef/HistoryRecipy';
import Marque from '../componentes/CardShef/Marque';

const Home = () => {
    return (
        <div className='lg:min-h-[calc(100vh_-_10vh)]'>
            <Banner></Banner>
            <CardShef></CardShef>
            <HistoryRecipy></HistoryRecipy>
            <Marque></Marque>
        </div>
    );
};

export default Home;