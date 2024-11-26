import { Progress, Box, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

function AnimatedGauge() {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue(prev => {
        if (prev === 100) clearInterval(interval);
        return prev + 1;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Box width="100%" padding="4">
      <Progress value={progressValue} size="lg" colorScheme="blue" />
      <Text mt="2" textAlign="center">{`${progressValue}%`}</Text>
    </Box>
  );
}

export default AnimatedGauge;
