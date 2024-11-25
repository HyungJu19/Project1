import React from 'react';
import { Box, Text, Button, Flex } from '@chakra-ui/react';

function MainBanner1() {
  return (
    <Box
      bgImage="url('https://via.placeholder.com/1500x500')"
      bgSize="cover"
      color="white"
      p={8}
      textAlign="center"
      position="relative"
      height="500px"
    >
      <Flex
        direction="column"
        justify="center"
        align="center"
        height="100%"
      >
        <Text fontSize="4xl" fontWeight="bold" mb={4}>
          Welcome to AngProject
        </Text>
        <Text fontSize="xl" mb={6}>
          Discover amazing features and services that will help you grow.
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </Flex>
    </Box>
  );
}

export default MainBanner1;
