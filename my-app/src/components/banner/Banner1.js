import React from 'react';
import { Box, Text, Button, Flex } from '@chakra-ui/react';

function Banner1() {
  return (
    <Box
      bgGradient="linear(to-r, teal.500, green.500)"
      color="white"
      p={8}
      textAlign="center"
      position="relative"
      height="500px"
    >
      <Flex direction="column" justify="center" align="center" height="100%">
        <Text fontSize="4xl" fontWeight="bold" mb={4}>
          Unlock Your Potential with AngProject
        </Text>
        <Text fontSize="xl" mb={6}>
          Join us to explore amazing opportunities and grow your skills.
        </Text>
        <Button colorScheme="whiteAlpha" size="lg" _hover={{ bg: 'teal.700' }}>
          Get Started
        </Button>
      </Flex>
    </Box>
  );
}

export default Banner1;
