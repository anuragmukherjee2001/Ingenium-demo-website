import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {useState} from "react";
import BannerSection from "../components/BannerSection";
import Info from '../components/Info';
import { HomeObj1, HomeObj2, HomeObj3 } from '../components/Info/Data';

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
        <Info {...HomeObj1}/>
        <Info {...HomeObj2}/>
        <Info {...HomeObj3}/>
        </>
    );
};

export default Home
