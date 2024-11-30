import React from 'react'
import Navbar from '../components/Navbar'

import Tabs1 from '../components/Tabs1'
import BasicSelectBox from '../components/SelectBox/BasicSelectBox';
import RoundedSelectBox from '../components/SelectBox/RoundedSelectBox';
import OutlinedSelectBox from '../components/SelectBox/OutlinedSelectBox';
import FlatSelectBox from '../components/SelectBox/FlatSelectBox';
import IconSelectBox from '../components/SelectBox/IconSelectBox';
import MultiColorSelectBox from '../components/SelectBox/MultiColorSelectBox';
import AnimatedSelectBox from '../components/SelectBox/AnimatedSelectBox';
import GradientSelectBox from '../components/SelectBox/GradientSelectBox';
import SmallSelectBox from '../components/SelectBox/SmallSelectBox';
import AnimatedSelectBox10 from '../components/SelectBox/AnimatedSelectBox10';
import PushDownSelectBox20 from '../components/SelectBox/AnimatedSelectBox20';

function SelectBoxPage() {
    return <>
    <Navbar />

 
    <Tabs1 />
    
    <p>BasicSelectBox</p>
    <BasicSelectBox />
    <p>RoundedSelectBox</p>
    <RoundedSelectBox />
    <p>OutlinedSelectBox</p>
    <OutlinedSelectBox />
    <p>PushDownSelectBox20</p>
    <PushDownSelectBox20 />
    <p>AnimatedSelectBox10</p>
    <AnimatedSelectBox10 />
    <p>FlatSelectBox</p>
    <FlatSelectBox />
    <p>IconSelectBox</p>
    <IconSelectBox />
    <p>MultiColorSelectBox</p>
    <MultiColorSelectBox />
    <p>AnimatedSelectBox</p>
    <AnimatedSelectBox />
    <p>GradientSelectBox</p>
    <GradientSelectBox />
    <p>SmallSelectBox</p>
    <SmallSelectBox />


    </>

}

export default SelectBoxPage;
