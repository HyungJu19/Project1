import React, { useState, useEffect } from 'react';
import { Box, Text, Button, Flex } from '@chakra-ui/react';

function ScrollBanner1() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerPosition = document.getElementById('scroll-banner').getBoundingClientRect().top;
      if (bannerPosition < window.innerHeight * 0.8) { // 배너가 화면의 80%에 도달하면
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      id="scroll-banner"
      bg="teal.500"
      color="white"
      p={8}
      textAlign="center"
      position="relative"
      height="500px"
      transform={isVisible ? 'translateX(0)' : 'translateX(-100%)'}
      transition="transform 1s ease-in-out"
    >
      <Flex direction="column" justify="center" align="center" height="100%">
        <Text fontSize="4xl" fontWeight="bold" mb={4}>
          Welcome to AngProject111
        </Text>
        <Text fontSize="xl" mb={6}>
          Explore the future of technology and build amazing things with us.
        </Text>
        <Button colorScheme="whiteAlpha" size="lg">
          Get Started
        </Button>
      </Flex>
    </Box>
  );
}

export default ScrollBanner1;
