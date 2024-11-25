import React from 'react';
import { Box, Text, Button, Flex } from '@chakra-ui/react';

function CenterTextBanner() {
  return (
    <Box
      bg="gray.900"
      color="white"
      p={10}
      textAlign="center"
      position="relative"
      height="400px"
    >
      <Flex direction="column" justify="center" align="center" height="100%">
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Take the Next Step with AngProject
        </Text>
        <Text fontSize="lg" mb={6}>
          Empowering creators and innovators with the right tools and knowledge.
        </Text>
        <Button colorScheme="teal" size="lg">
          Learn More
        </Button>
      </Flex>
    </Box>
  );
}

export default CenterTextBanner;
