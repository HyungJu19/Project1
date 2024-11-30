import React from 'react';
import Navbar from '../components/Navbar';


import Tabs1 from '../components/Tabs1';
import BasicButton from '../components/button/BasicButton';
import ColoredButtons from '../components/button/ColoredButtons';
import SizeButtons from '../components/button/SizeButtons';
import IconButton from '../components/button/IconButton';
import DisabledButton from '../components/button/DisabledButton';
import LoadingButton from '../components/button/LoadingButton';
import ButtonVariants from '../components/button/ButtonVariants';
import ButtonGroupExample from '../components/button/ButtonGroupExample';
import ToggleButton from '../components/button/ToggleButton';
import CustomStyledButton from '../components/button/CustomStyledButton';
import CustomToggleButton from '../components/button/CustomToggleButton';
import ToggleWithLabel from '../components/button/ToggleWithLabel';
import Header from '../components/Header';

function ButtonPage() {
    
    return <>
          <Header />
    <Navbar />


    <Tabs1 />
    
    <p>BasicButton</p>
    <BasicButton />
    <p>ColoredButtons</p>
    <ColoredButtons />
    <p>SizeButtons</p>
    <SizeButtons />

    <p>IconButton</p>
    <IconButton />
    <p>DisabledButton</p>
    <DisabledButton />
    <p>LoadingButton</p>
    <LoadingButton />
    <p>ButtonVariants</p>
    <ButtonVariants />
    <p>ButtonGroupExample</p>
    <ButtonGroupExample />

    <p>ToggleButton</p>
    <ToggleButton />
    <p>CustomStyledButton</p>
    <CustomStyledButton />

    <p>CustomToggleButton</p>
    <CustomToggleButton />

    <p>ToggleWithLabel</p>
    <ToggleWithLabel />
    </>


    
}



export default ButtonPage;