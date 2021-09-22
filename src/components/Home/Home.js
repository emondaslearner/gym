import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Section2 from '../Section2/Section2';
import TrainingPrograms from '../TrainingPrograms/TrainingPrograms';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Section2></Section2>
            <About></About>
            <TrainingPrograms></TrainingPrograms>
            <WhyChooseUs></WhyChooseUs>
            <Footer></Footer>
        </>
    );
};

export default Home;