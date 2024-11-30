import React from 'react';
import Navbar from '../components/Navbar';


import Tabs1 from '../components/Tabs1';
import BasicTextInput from '../components/textBox/BasicTextInput';
import ThemedTextInput from '../components/textBox/ThemedTextInput';
import MultiLineInput from '../components/textBox/MultiLineInput';
import IconTextInput from '../components/textBox/IconTextInput';
import ErrorTextInput from '../components/textBox/ErrorTextInput';
import RoundedTextInput from '../components/textBox/RoundedTextInput';
import LimitedTextInput from '../components/textBox/LimitedTextInput';
import HighlightedTextInput from '../components/textBox/HighlightedTextInput';
import HookFormTextBox from '../components/textBox/HookFormTextBox';
import ChakraTextBox from '../components/textBox/ChakraTextBox';
import QuillTextBox from '../components/textBox/QuillTextBox';
import Header from '../components/Header';

function TextBox() {
    
    return <>
          <Header />
    <Navbar />


    <Tabs1 />
 
    <p>BasicTextInput</p>
    <BasicTextInput />
    <p>ThemedTextInput</p>
    <ThemedTextInput />
    <p>MultiLineInput</p>
    <MultiLineInput />
    <p>IconTextInput</p>
    <IconTextInput />
    <p>ErrorTextInput</p>
    <ErrorTextInput />
    <p>RoundedTextInput</p>
    <RoundedTextInput />
    <p>LimitedTextInput</p>
    <LimitedTextInput />
    <p>HighlightedTextInput</p>
    <HighlightedTextInput />
    <p>HookFormTextBox</p>
    <HookFormTextBox />
    <p>ChakraTextBox</p>
    <ChakraTextBox />
    <p>QuillTextBox</p>
    <QuillTextBox />

    </>

    
}



export default TextBox;