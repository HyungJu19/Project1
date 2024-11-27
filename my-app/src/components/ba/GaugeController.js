import React, { useState } from "react";
import {
  Box,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Stack,
} from "@chakra-ui/react";

function GaugeController() {
  const [value, setValue] = useState(50); // 기본 값은 50

  // 게이지 증가
  const increase = () => setValue((prev) => Math.min(prev + 10, 100)); // 최대값 100
  // 게이지 감소
  const decrease = () => setValue((prev) => Math.max(prev - 10, 0)); // 최소값 0

  return (
    <Box p={6} textAlign="center">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        현재 값: {value}
      </Text>
      <Slider
        aria-label="gauge-slider"
        value={value}
        min={0}
        max={100}
        isReadOnly // 슬라이더는 읽기 전용으로 설정
        colorScheme="teal"
        mb={4}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Stack direction="row" spacing={4} justifyContent="center">
        <Button colorScheme="red" onClick={decrease}>
          감소
        </Button>
        <Button colorScheme="green" onClick={increase}>
          증가
        </Button>
      </Stack>
    </Box>
  );
}

export default GaugeController;
