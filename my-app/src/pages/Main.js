import React from 'react'
import Navbar from '../components/Navbar'
import {  Button, Link,} from "@chakra-ui/react";
import Tabs1 from '../components/Tabs1'
import { Link as RouterLink } from "react-router-dom";

function Main() {
    return <>
    <Navbar />

 
    <Tabs1 />
    
    <Button colorScheme="blue" as={RouterLink} to="/inputViewPage1">***만들기</Button>


    </>

}

export default Main;
