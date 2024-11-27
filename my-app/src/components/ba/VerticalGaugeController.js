import React, { useState } from "react";
import {
  Box,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  VStack,
} from "@chakra-ui/react";

function VerticalGaugeController() {
  const [value, setValue] = useState(50);

  const increase = () => setValue((prev) => Math.min(prev + 10, 100));
  const decrease = () => setValue((prev) => Math.max(prev - 10, 0));

  return (
    <Box p={6} textAlign="center">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        현재 값: {value}
      </Text>
      <VStack spacing={4}>
        <Button colorScheme="green" onClick={increase}>
          ➕ 증가
        </Button>
        <Slider
          aria-label="vertical-slider"
          value={value}
          min={0}
          max={100}
          isReadOnly
          orientation="vertical" // 세로 방향 슬라이더
          height="200px"
          colorScheme="teal"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Button colorScheme="red" onClick={decrease}>
          ➖ 감소
        </Button>
      </VStack>
    </Box>
  );
}

export default VerticalGaugeController;
