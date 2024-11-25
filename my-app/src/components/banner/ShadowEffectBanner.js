import React from 'react';
import { Box, Text, Button, Flex } from '@chakra-ui/react';

function ShadowEffectBanner() {
  return (
    <Box
      bg="teal.500"
      color="white"
      p={8}
      textAlign="center"
      position="relative"
      height="500px"
      boxShadow="0 4px 10px rgba(0, 0, 0, 0.2)"  // 배너에 그림자 효과 추가
    >
      <Flex direction="column" justify="center" align="center" height="100%">
        <Text fontSize="4xl" fontWeight="bold" mb={4}>
          Take Action Now
        </Text>
        <Text fontSize="xl" mb={6}>
          Unlock the door to your future and start making an impact today.
        </Text>
        <Button colorScheme="whiteAlpha" size="lg">
          Get Started
        </Button>
      </Flex>
    </Box>
  );
}

export default ShadowEffectBanner;
