import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {useState} from "react";
import BannerSection from "../components/BannerSection";

const Home = () => {

    const [isOpen, settoOpen] = useState(false);

    const toggle = () => {
        settoOpen(!isOpen);
    }

    return (
        <>
        <Sidebar isOpen = {isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <BannerSection/>
        </>
    );
};

export default Home
