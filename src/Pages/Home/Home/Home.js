import React from 'react';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div id="home">
            <Navigation />
            <Hero />
            <Projects />
            <Services />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;