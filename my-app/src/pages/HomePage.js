import React from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

import Tabs1 from '../components/Tabs1';
import MainBanner1 from '../components/banner/MainBanner1';
import Banner1 from '../components/banner/Banner1';
import Banner2 from '../components/banner/Banner2';
import CenterTextBanner from '../components/banner/CenterTextBanner';

import ScrollBanner1 from '../components/banner/ScrollBanner1';
import GradientBanner from '../components/banner/GradientBanner';
import ImageBanner from '../components/banner/ImageBanner';
import HoverAnimationBanner from '../components/banner/HoverAnimationBanner';
import CardStyleBanner from '../components/banner/CardStyleBanner';
import ShadowEffectBanner from '../components/banner/ShadowEffectBanner';


function HomePage() {
  return (
    <>
    <Navbar />
    <Header />
   
    <Tabs1 />
    <Box p={4} bg="gray.50" minHeight="100vh">
      <Heading as="h1" mb={4}>
       
      </Heading>
    <MainBanner1 />
    <Banner1 />
    <Banner2 />
    <CenterTextBanner />
    <GradientBanner />
    <ScrollBanner1 />
    <ImageBanner />
    <HoverAnimationBanner />
    <CardStyleBanner />
    <ShadowEffectBanner />
      <Text fontSize="lg" mb={4}>
        앙프 만에 특별함 
      </Text>
      <Button as={Link} to="" colorScheme="teal" size="lg">
        앙프를 선택해야되는 이유
      </Button>
      
    </Box>
    </>
  );
}

export default HomePage;
