import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

import Tabs1 from '../components/Tabs1';
import BasicGaugeBar from '../components/ba/BasicGaugeBar';
import GaugeWithLabel from '../components/ba/GaugeWithLabel';
import AnimatedGauge from '../components/ba/AnimatedGauge';
import CustomStyledGauge from '../components/ba/CustomStyledGauge';
import ToggleGaugeBar from '../components/ba/ToggleGaugeBar';
import ValueSelector from '../components/ba/ValueSelector';
import CardSlider from '../components/ba/CardSlider';
import CircularSlider from '../components/ba/CircularSlider';
import DynamicColorSlider from '../components/ba/DynamicColorSlider';
import TooltipSlider from '../components/ba/TooltipSlider';
import GaugeController from '../components/ba/GaugeController';
import CircularGaugeController from '../components/ba/CircularGaugeController';
import CardGaugeController from '../components/ba/CardGaugeController';
import VerticalGaugeController from '../components/ba/VerticalGaugeController';
import IconButtonGaugeController from '../components/ba/IconButtonGaugeController';

function Ba() {
    
    return <>
          <Header />
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
    <p>ValueSelector</p>
    <ValueSelector />
    <p>CardSlider</p>
    <CardSlider />
    <p>CircularSlider</p>
    <CircularSlider />
    <p>DynamicColorSlider</p>
    <DynamicColorSlider />
    <p>TooltipSlider</p>
    <TooltipSlider />
    <p>GaugeController</p>
    <GaugeController />
    <p>CircularGaugeController</p>
    <CircularGaugeController />
    <p>CardGaugeController</p>
    <CardGaugeController />
    <p>VerticalGaugeController</p>
    <VerticalGaugeController />
    <p>IconButtonGaugeController</p>
    <IconButtonGaugeController />
    </>

    
}



export default Ba;