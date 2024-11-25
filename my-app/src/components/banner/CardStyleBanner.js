import React from 'react';
import { Box, Text, Button, Card, CardBody, Heading, Stack } from '@chakra-ui/react';

function CardStyleBanner() {
  return (
    <Box p={8} textAlign="center">
      <Card maxW="lg" borderRadius="lg" boxShadow="xl" bg="gray.700" color="white">
        <CardBody>
          <Stack spacing={4}>
            <Heading size="lg">Explore New Possibilities with AngProject</Heading>
            <Text fontSize="xl">
              Discover your potential and build amazing things with our platform.
            </Text>
            <Button colorScheme="teal" size="lg">
              Get Started
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}

export default CardStyleBanner;
