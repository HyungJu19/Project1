import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

function HoverAnimationBanner() {
  return (
    <Box
      bg="purple.500"
      color="white"
      p={8}
      textAlign="center"
      position="relative"
      height="500px"
      _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease-in-out' }}  // 호버 시 애니메이션
    >
      <Text fontSize="4xl" fontWeight="bold" mb={4}>
        Join the Revolution
      </Text>
      <Text fontSize="xl" mb={6}>
        Become part of something bigger, and innovate the future.
      </Text>
      <Button colorScheme="whiteAlpha" size="lg">
        Get Started
      </Button>
    </Box>
  );
}

export default HoverAnimationBanner;
