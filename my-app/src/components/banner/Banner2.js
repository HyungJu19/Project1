import React, { useEffect, useState } from 'react';
import { Box, Text, Button, Flex } from '@chakra-ui/react';

function Banner2() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Box
      bg="teal.500"
      color="white"
      p={8}
      textAlign="center"
      position="relative"
      height="500px"
      transform={visible ? 'translateX(0)' : 'translateX(-100%)'}
      transition="transform 1s ease-in-out"
    >
      <Flex direction="column" justify="center" align="center" height="100%">
        <Text fontSize="4xl" fontWeight="bold" mb={4}>
          Get Started with AngProject Today!
        </Text>
        <Text fontSize="xl" mb={6}>
          Explore the future of technology and build amazing things.
        </Text>
        <Button colorScheme="whiteAlpha" size="lg">
          Join Now
        </Button>
      </Flex>
    </Box>
  );
}

export default Banner2;
