import { Progress, Box, Text } from '@chakra-ui/react';

function GaugeWithLabel() {
  const progressValue = 75; // 예시 진행 상태

  return (
    <Box width="100%" padding="4">
      <Progress value={progressValue} size="lg" colorScheme="green" />
      <Text mt="2" textAlign="center">{`${progressValue}%`}</Text>
    </Box>
  );
}

export default GaugeWithLabel;
