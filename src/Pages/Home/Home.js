import React from 'react';
import Calendars from '../Calendar/Calendars';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';


const Home = () => {
    return (
        <div>
        <Navbar></Navbar>
         <Calendars></Calendars>
         <Footer></Footer>
        </div>
    );
};

export default Home;