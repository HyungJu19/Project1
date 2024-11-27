import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

import Tabs1 from '../components/Tabs1';
import BasicGaugeBar from '../components/ba/BasicGaugeBar';
import GaugeWithLabel from '../components/ba/GaugeWithLabel';
import AnimatedGauge from '../components/ba/AnimatedGauge';
import CustomStyledGauge from '../components/ba/CustomStyledGauge';
import ToggleGaugeBar from '../components/ba/ToggleGaugeBar';

function Ba() {
    
    return <>
    <Navbar />


    <Tabs1 />
    <p>BasicGaugeBar</p>
    <BasicGaugeBar />
    <p>GaugeWithLabel</p>
    <GaugeWithLabel />
    <p>AnimatedGauge</p>
    <AnimatedGauge />
    <p>CustomStyledGauge</p>
    <CustomStyledGauge />
    <p>ToggleGaugeBar</p>
    <ToggleGaugeBar />
    </>

    
}



export default Ba;