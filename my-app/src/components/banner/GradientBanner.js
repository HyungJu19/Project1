import React from 'react';
import { Box, Text, Button, Flex } from '@chakra-ui/react';

function GradientBanner() {
  return (
    <Box
      bgGradient="linear(to-r, teal.400, blue.500)"
      color="white"
      p={8}
      textAlign="center"
      position="relative"
      height="500px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Text fontSize="4xl" fontWeight="bold" mb={4}>
          Discover New Opportunities
        </Text>
        <Text fontSize="xl" mb={6}>
          Join us to unlock your full potential and create amazing things.
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </Box>
    </Box>
  );
}

export default GradientBanner;
