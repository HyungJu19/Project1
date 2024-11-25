import React from 'react';
import { Box, Text, Button, Flex } from '@chakra-ui/react';

function ImageBanner() {
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
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
      >
        <Text fontSize="4xl" fontWeight="bold" mb={4}>
          Unlock Your Future Today
        </Text>
        <Text fontSize="xl" mb={6}>
          Join our community and take the first step towards your success.
        </Text>
        <Button colorScheme="teal" size="lg">
          Learn More
        </Button>
      </Box>
    </Box>
  );
}

export default ImageBanner;
