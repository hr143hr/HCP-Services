import React from 'react';
import { Outlet } from "react-router";
import Header from '../Components/Website/Header/Header';
import Footer from '../Components/Website/Footer/Footer';

const WebLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default WebLayout;
