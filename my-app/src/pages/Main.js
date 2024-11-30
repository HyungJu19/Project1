import React from 'react'
import Navbar from '../components/Navbar'
import {  Button, Link,} from "@chakra-ui/react";
import Tabs1 from '../components/Tabs1'
import { Link as RouterLink } from "react-router-dom";
import Header from '../components/Header';

function Main() {
    return <>
        <Header />
    <Navbar />

 
    <Tabs1 />
    
    <Button colorScheme="blue" as={RouterLink} to="/inputViewPage1">***만들기</Button>


    </>

}

export default Main;
