import React, { useState } from 'react';
import { Box, Progress, Switch, Text, FormControl, FormLabel } from '@chakra-ui/react';

function ToggleGaugeBar() {
  const [isChecked, setIsChecked] = useState(false);
  const [progressValue, setProgressValue] = useState(50);  // 기본 값: 50%

  const toggleProgress = () => {
    setIsChecked(!isChecked);
    // 토글할 때 진행 상태를 100%와 0%로 변경
    setProgressValue(isChecked ? 0 : 100);  
  };

  return (
    <Box width="100%" padding="4">
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="toggle-progress" mb="0">
          Toggle Gauge Progress
        </FormLabel>
        <Switch
          id="toggle-progress"
          isChecked={isChecked}
          onChange={toggleProgress}
          colorScheme="teal"
        />
      </FormControl>

      <Progress value={progressValue} size="lg" colorScheme="blue" mt="4" />
      <Text mt="2" textAlign="center">{`Progress: ${progressValue}%`}</Text>
    </Box>
  );
}

export default ToggleGaugeBar;
